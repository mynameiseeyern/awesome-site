# Renders public/work/ee-sketch.png from a square crop of the portrait photo: textured paper, a washed watercolour
# layer with bleed and edge darkening, and wobbly pencil lines on top. Usage: python3 scripts/portrait-sketch.py [saturation] [lift]
# Needs opencv-python and numpy; expects crop.jpg and mask.png in the working directory (see git history for how they were made).
import cv2, numpy as np, sys
img=cv2.imread('crop.jpg'); m=cv2.imread('mask.png',0).astype(np.float32)/255
H,W=img.shape[:2]
def noise(sig,seed):
    r=np.random.default_rng(seed); n=cv2.GaussianBlur(r.normal(0,1,(H,W)).astype(np.float32),(0,0),sig); return (n-n.mean())/(n.std()+1e-6)
def norm01(x): return (x-x.min())/(x.max()-x.min()+1e-6)
def aniso(seed,sx,sy):
    r=np.random.default_rng(seed); n=r.normal(0,1,(H,W)).astype(np.float32)
    return cv2.GaussianBlur(n,(0,0),sigmaX=sx,sigmaY=sy)
paper=0.55*noise(1.0,1)+0.3*noise(3,2)+0.15*noise(12,3)
paper=norm01(paper+0.35*norm01(aniso(4,9,0.6))+0.25*norm01(aniso(6,0.6,9)))
paper_rgb=np.array([0xEC,0xF1,0xF3],np.float32)
paper_img=paper_rgb[None,None,:]*(0.94+0.08*paper[...,None])
sm=img.copy()
for _ in range(5): sm=cv2.bilateralFilter(sm,11,60,9)
Z=sm.reshape(-1,3).astype(np.float32)
_,lab,cen=cv2.kmeans(Z,7,None,(cv2.TERM_CRITERIA_EPS+cv2.TERM_CRITERIA_MAX_ITER,20,1.0),3,cv2.KMEANS_PP_CENTERS)
post=cv2.GaussianBlur(cen[lab.flatten()].reshape(H,W,3),(0,0),2)
dx=noise(40,7)*6; dy=noise(40,8)*6
yy,xx=np.mgrid[0:H,0:W].astype(np.float32)
wash=cv2.remap(post,xx+dx,yy+dy,cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT)
mask_b=cv2.remap(m,xx+dx,yy+dy,cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT)
hsv=cv2.cvtColor(wash.astype(np.uint8),cv2.COLOR_BGR2HSV).astype(np.float32)
SAT=float(sys.argv[1]) if len(sys.argv)>1 else 0.55; LIFT=float(sys.argv[2]) if len(sys.argv)>2 else 0.62
hsv[...,1]*=SAT; hsv[...,2]=255-(255-hsv[...,2])*LIFT
wash=cv2.cvtColor(hsv.astype(np.uint8),cv2.COLOR_HSV2BGR).astype(np.float32)
gran=0.9+0.16*norm01(noise(6,9))+0.03*noise(1.2,10)
wash=wash*gran[...,None]
edges=cv2.Laplacian(cv2.GaussianBlur(cv2.cvtColor(post.astype(np.uint8),cv2.COLOR_BGR2GRAY),(0,0),1.5),cv2.CV_32F)
edge_dark=np.clip(cv2.GaussianBlur(np.abs(edges),(0,0),2.5)/18,0,1)
wash=wash*(1-0.35*edge_dark)[...,None]
wa=cv2.GaussianBlur(np.clip(mask_b*(0.75+0.35*norm01(noise(18,12))),0,1),(0,0),1.5)
gray=cv2.cvtColor(sm,cv2.COLOR_BGR2GRAY).astype(np.float32)
bl=cv2.GaussianBlur(255-gray,(0,0),18); line=np.clip(gray*255/(255-bl+1e-3),0,255); line=255*((line/255)**2.0)
line=np.where(line>200,255-(255-line)*0.3,line)
line=cv2.remap(line,xx+noise(12,13)*1.1,yy+noise(12,14)*1.1,cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT)
pressure=0.7+0.45*norm01(noise(5,15))
la=np.clip((1-line/255)*1.5*pressure,0,1)*m
d=(255-cv2.GaussianBlur(gray,(0,0),5))/255
tone=np.clip((d-0.4)/0.5,0,1)**1.4*(0.75+0.5*norm01(noise(1.5,16)))
la=np.clip(la+tone*0.75*m,0,1)
ink=np.array([0x33,0x33,0x2E],np.float32)
def compose(with_wash):
    out=paper_img.copy()
    if with_wash: out=out*(1-wa[...,None])+wash*wa[...,None]
    out=out*(1-la[...,None])+ink[None,None,:]*la[...,None]
    return np.clip(out*(0.96+0.06*paper[...,None]),0,255).astype(np.uint8)
A=compose(True); B=compose(False)
cv2.imwrite('I_wash.png',A); cv2.imwrite('I_mono.png',B)
cv2.imwrite('I_preview.png',cv2.resize(np.hstack([A,B]),(1200,600),interpolation=cv2.INTER_AREA))
