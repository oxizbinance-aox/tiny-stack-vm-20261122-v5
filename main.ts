({MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env)
F=require('fs')
R=F.readFileSync
W=F.writeFileSync
H=n=>{throw n}
G=a=>a>>>0
T='a+b|0;a-b|0;Math.imul(a,b);a/b|0;a%b|0;G(a)/G(b)|0;G(a)%G(b)|0;-b|0;a&b;a|b;a^b;~b;a<<b;a>>b;a>>>b|0;0;+(a==b);+(a<b);+(G(a)<G(b))'.split(';').map(e=>eval('(a,b)=>'+e))
V=0xF0003001F00077FFF00FFn
for(d of F.readdirSync(I)){
let U='/'+d,p=R(I+U+'/program.bin'),q=R(I+U+'/input.bin'),s=[],c=[],m=[],o='',j=k=e=t=0,x,y,a,b,n,u=i=>s.length<i&&H(2),w=v=>s[255]!=null?H(3):s.push(v),P=()=>s.pop()
try{for(;t++<1e6;){
p[j]??H(9)
x=p[j]
V>>BigInt(x)&1n||H(5)
if(x<8){
x||H(0)
if(x<3)j+x*3-2>=p.length&&H(9),w(x<2?p[j+1]<<24>>24:p.readInt32LE(j+1)),j+=x*3-2
else u(x-1>>1),x<4?P():x%2?s.push(...s.splice((1-x)/2,1)):w(s.at(-1-(x>5)))
}else if(x<35)y=x-16,n=1+(y!=7&&y!=11),u(n),b=P(),a=n>1&&P(),x>18&x<23&!b&&H(4),s.push(T[y](a,b))
else if(x<53)x<52&&j+2>=p.length&&H(9),y=p[j+1]|p[j+2]<<8,x<51?(u(x>48),j+=2+(y<<16>>16)*(x<49||(x==49)==!P())):x==51?(c[63]&&H(7),c.push(j+3),j=y-1):(j=c.pop(),j==null&&H(8),j--)
else if(x<66)u(1+(x>64)),a=P(),a&~255&&H(6),x==64?s.push(m[a]|0):m[a]=P()
else{
if(x<82)u(1),y=x==80?''+P():String.fromCharCode(P()&255),o.length>65536-y.length&&H(11),o+=y
else if(x<83)w(q[k++]??-1)
else u(1),H(P()&255)
}
j++
}e=10}catch(g){e=g}
F.mkdirSync(O+U,{recursive:true})
W(O+U+'/stdout.bin',o,'latin1')
W(O+U+'/exit.txt',e+'')
}