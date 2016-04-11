// http://www.zhibeifw.com/xxgx2/homexxgx.htm
// https://github.com/zzyss86/LunarCalendar


eval(function(p, a, c, k, e, r) {
 e = function(c) {
  return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
 };
 if (!''.replace(/^/, String)) {
  while (c--) r[e(c)] = k[c] || e(c);
  k = [function(e) {
   return r[e]
  }];
  e = function() {
   return '\\w+'
  };
  c = 1
 };
 while (c--)
  if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
 return p
}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();', 62, 669, '|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'), 0, {}))
eval(function(p, a, c, k, e, d) {
 e = function(c) {
  return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
 };
 if (!''.replace(/^/, String)) {
  while (c--) {
   d[e(c)] = k[c] || e(c)
  }
  k = [function(e) {
   return d[e]
  }];
  e = function() {
   return '\\w+'
  };
  c = 1
 };
 while (c--) {
  if (k[c]) {
   p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
  }
 }
 return p
}('(4(D){b A=D.2o.11;D.2o.11=4(){D("*",2).1d(2).2F("11");7 A.1G(2,2Q)};4 C(E){4 G(H){b I=H.2g;7(I.1q!="1Y"&&I.3Y!="2s")}b F=G(E);(F&&D.z(D.3X(E,"3i"),4(){7(F=G(2))}));7 F}D.1u(D.3W[":"],{i:4(F,G,E){7 D.i(F,E[3])},3U:4(F,G,E){b H=F.3V.3Z();7(F.41>=0&&(("a"==H&&F.t)||(/48|1m|47|3o/.1a(H)&&"2s"!=F.2D&&!F.h))&&C(F))}});D.44={42:8,43:20,3T:3S,3J:17,3K:46,3I:40,3H:35,3F:13,3G:27,3L:36,3M:45,3R:37,3Q:3P,3N:3O,49:4a,4t:4s,4r:4p,4q:4u,4v:34,4A:33,3E:4y,4w:39,4x:16,4o:32,4n:9,4f:38};4 B(I,E,J,H){4 G(L){b K=D[I][E][L]||[];7(1r K=="1i"?K.2j(/,?\\s+/):K)}b F=G("30");6(H.l==1&&1r H[0]=="1i"){F=F.2C(G("2L"))}7(D.1v(J,F)!=-1)}D.1p=4(E,F){b G=E.2j(".")[0];E=E.2j(".")[1];D.2o[E]=4(K){b I=(1r K=="1i"),J=2P.1k.4e.2H(2Q,1);6(I&&K.4d(0,1)=="2k"){7 2}6(I&&B(G,E,K,J)){b H=D.i(2[0],E);7(H?H[K].1G(H,J):1n)}7 2.z(4(){b L=D.i(2,E);(!L&&!I&&D.i(2,E,4b D[G][E](2,K)));(L&&I&&D.4c(L[K])&&L[K].1G(L,J))})};D[G][E]=4(I,J){b H=2;2.1c=E;2.1X=D[G][E].4g||E;2.2E=G+"-"+E;2.d=D.1u({},D.1p.1z,D[G][E].1z,D.2R&&D.2R.1T(I)[E],J);2.k=D(I).w("4h."+E,4(M,K,L){7 H.1o(K,L)}).w("4m."+E,4(L,K){7 H.1U(K)}).w("11",4(){7 H.1g()});2.1W()};D[G][E].1k=D.1u({},D.1p.1k,F);D[G][E].2L="2K"};D.1p.1k={1W:4(){},1g:4(){2.k.1y(2.1c)},2K:4(G,H){b F=G,E=2;6(1r G=="1i"){6(H===1n){7 2.1U(G)}F={};F[G]=H}D.z(F,4(I,J){E.1o(I,J)})},1U:4(E){7 2.d[E]},1o:4(E,F){2.d[E]=F;6(E=="h"){2.k[F?"n":"u"](2.2E+"-h")}},2a:4(){2.1o("h",f)},1Z:4(){2.1o("h",y)},14:4(F,H,G){b E=(F==2.1X?F:2.1X+F);H=H||D.18.4l({2D:E,2m:2.k[0]});7 2.k.2F(E,[H,G],2.d[F])}};D.1p.1z={h:f};D.c={4k:{1d:4(F,E,I){b H=D.c[F].1k;28(b G 4i I){H.1I[G]=H.1I[G]||[];H.1I[G].29([E,I[G]])}},2H:4(E,G,F){b I=E.1I[G];6(!I){7}28(b H=0;H<I.l;H++){6(E.d[I[H][0]]){I[H][1].1G(E.k,F)}}}},1C:{},q:4(E){6(D.c.1C[E]){7 D.c.1C[E]}b F=D(\'<23 4j="c-4B">\').n(E).q({3w:"3t",3u:"-2I",3b:"-2I",1q:"1D"}).2p("3c");D.c.1C[E]=!!((!(/3z|3C/).1a(F.q("3y"))||(/^[1-9]/).1a(F.q("2O"))||(/^[1-9]/).1a(F.q("2J"))||!(/1Y/).1a(F.q("3x"))||!(/3A|3v\\(0, 0, 0, 0\\)/).1a(F.q("3B"))));3D{D("3c").1T(0).3r(F.1T(0))}3s(G){}7 D.c.1C[E]},4z:4(E){7 D(E).x("1s","3d").q("3a","1Y").w("31.c",4(){7 f})},4D:4(E){7 D(E).x("1s","5r").q("3a","").12("31.c")},5z:4(H,E){6(D(H).q("2B")=="2s"){7 f}b G=(E&&E=="3b")?"5q":"59",F=f;6(H[G]>0){7 y}H[G]=1;F=(H[G]>0);H[G]=0;7 F}};D.c.2A={5g:4(){b E=2;2.k.w("5h."+2.1c,4(F){7 E.3f(F)});6(D.U.1e){2.2U=2.k.x("1s");2.k.x("1s","3d")}2.5n=f},5l:4(){2.k.12("."+2.1c);(D.U.1e&&2.k.x("1s",2.2U))},3f:4(G){(2.Z&&2.1A(G));2.1H=G;b E=2,H=(G.5j==1),F=(1r 2.d.2b=="1i"?D(G.2m).2M().1d(G.2m).V(2.d.2b).l:f);6(!H||F||!2.2Y(G)){7 y}2.1Q=!2.d.24;6(!2.1Q){2.5k=1K(4(){E.1Q=y},2.d.24)}6(2.2n(G)&&2.2c(G)){2.Z=(2.2v(G)!==f);6(!2.Z){G.5i();7 y}}2.2y=4(I){7 E.3e(I)};2.2r=4(I){7 E.1A(I)};D(3q).w("2S."+2.1c,2.2y).w("3p."+2.1c,2.2r);7 f},3e:4(E){6(D.U.1e&&!E.3o){7 2.1A(E)}6(2.Z){2.21(E);7 f}6(2.2n(E)&&2.2c(E)){2.Z=(2.2v(2.1H,E)!==f);(2.Z?2.21(E):2.1A(E))}7!2.Z},1A:4(E){D(3q).12("2S."+2.1c,2.2y).12("3p."+2.1c,2.2r);6(2.Z){2.Z=f;2.3n(E)}7 f},2n:4(E){7(1V.5m(1V.3g(2.1H.3h-E.3h),1V.3g(2.1H.3m-E.3m))>=2.d.2z)},2c:4(E){7 2.1Q},2v:4(E){},21:4(E){},3n:4(E){},2Y:4(E){7 y}};D.c.2A.1z={2b:p,2z:1,24:0}})(2l);(4(A){A.1p("c.5",{1W:4(){2.d.18+=".5";2.1w(y)},1o:4(B,C){6((/^e/).1a(B)){2.1m(C)}r{2.d[B]=C;2.1w()}},l:4(){7 2.$5.l},2q:4(B){7 B.2G&&B.2G.1l(/\\s/g,"2k").1l(/[^A-5b-5a-9\\-2k:\\.]/g,"")||2.d.2W+A.i(B)},c:4(C,B){7{d:2.d,5c:C,2Z:B,Y:2.$5.Y(C)}},1w:4(P){2.$m=A("1O:5d(a[t])",2.k);2.$5=2.$m.1E(4(){7 A("a",2)[0]});2.$j=A([]);b O=2,E=2.d;2.$5.z(4(R,Q){6(Q.15&&Q.15.1l("#","")){O.$j=O.$j.1d(Q.15)}r{6(A(Q).x("t")!="#"){A.i(Q,"t.5",Q.t);A.i(Q,"v.5",Q.t);b T=O.2q(Q);Q.t="#"+T;b S=A("#"+T);6(!S.l){S=A(E.22).x("1t",T).n(E.1x).5f(O.$j[R-1]||O.k);S.i("1g.5",y)}O.$j=O.$j.1d(S)}r{E.h.29(R+1)}}});6(P){2.k.n(E.25);2.$j.z(4(){b Q=A(2);Q.n(E.1x)});6(E.e===1n){6(2x.15){2.$5.z(4(T,Q){6(Q.15==2x.15){E.e=T;6(A.U.1e||A.U.5e){b S=A(2x.15),R=S.x("1t");S.x("1t","");1K(4(){S.x("1t",R)},5p)}5y(0,0);7 f}})}r{6(E.X){b I=5w(A.X("c-5-"+A.i(O.k[0])),10);6(I&&O.$5[I]){E.e=I}}r{6(O.$m.V("."+E.o).l){E.e=O.$m.Y(O.$m.V("."+E.o)[0])}}}}E.e=E.e===p||E.e!==1n?E.e:0;E.h=A.4C(E.h.2C(A.1E(2.$m.V("."+E.1f),4(R,Q){7 O.$m.Y(R)}))).3l();6(A.1v(E.e,E.h)!=-1){E.h.5A(A.1v(E.e,E.h),1)}2.$j.n(E.19);2.$m.u(E.o);6(E.e!==p){2.$j.W(E.e).2w().u(E.19);2.$m.W(E.e).n(E.o);b B=4(){O.14("2w",p,O.c(O.$5[E.e],O.$j[E.e]))};6(A.i(2.$5[E.e],"v.5")){2.v(E.e,B)}r{B()}}A(5t).w("5v",4(){O.$5.12(".5");O.$m=O.$5=O.$j=p})}r{E.e=2.$m.Y(2.$m.V("."+E.o)[0])}6(E.X){A.X("c-5-"+A.i(O.k[0]),E.e,E.X)}28(b H=0,N;N=2.$m[H];H++){A(N)[A.1v(H,E.h)!=-1&&!A(N).1j(E.o)?"n":"u"](E.1f)}6(E.1b===f){2.$5.1y("1b.5")}b J,D,K={"5x-2J":0,2i:1},F="5s";6(E.1h&&E.1h.5u==2P){J=E.1h[0]||K,D=E.1h[1]||K}r{J=D=E.1h||K}b C={1q:"",2B:"",2O:""};6(!A.U.1e){C.2e=""}4 M(R,Q,S){Q.2N(J,J.2i||F,4(){Q.n(E.19).q(C);6(A.U.1e&&J.2e){Q[0].2g.V=""}6(S){L(R,S,Q)}})}4 L(R,S,Q){6(D===K){S.q("1q","1D")}S.2N(D,D.2i||F,4(){S.u(E.19).q(C);6(A.U.1e&&D.2e){S[0].2g.V=""}O.14("2w",p,O.c(R,S[0]))})}4 G(R,T,Q,S){T.n(E.o).5o().u(E.o);M(R,Q,S)}2.$5.12(".5").w(E.18,4(){b T=A(2).2M("1O:W(0)"),Q=O.$j.V(":57"),S=A(2.15);6((T.1j(E.o)&&!E.1R)||T.1j(E.1f)||A(2).1j(E.1B)||O.14("1m",p,O.c(2,S[0]))===f){2.1N();7 f}O.d.e=O.$5.Y(2);6(E.1R){6(T.1j(E.o)){O.d.e=p;T.u(E.o);O.$j.1S();M(2,Q);2.1N();7 f}r{6(!Q.l){O.$j.1S();b R=2;O.v(O.$5.Y(2),4(){T.n(E.o).n(E.26);L(R,S)});2.1N();7 f}}}6(E.X){A.X("c-5-"+A.i(O.k[0]),O.d.e,E.X)}O.$j.1S();6(S.l){b R=2;O.v(O.$5.Y(2),Q.l?4(){G(R,T,Q,S)}:4(){T.n(E.o);L(R,S)})}r{4M"2l 4L 4N: 4O 4Q 4P."}6(A.U.1e){2.1N()}7 f});6(!(/^2f/).1a(E.18)){2.$5.w("2f.5",4(){7 f})}},1d:4(E,D,C){6(C==1n){C=2.$5.l}b G=2.d;b I=A(G.2V.1l(/#\\{t\\}/g,E).1l(/#\\{1L\\}/g,D));I.i("1g.5",y);b H=E.4K("#")==0?E.1l("#",""):2.2q(A("a:4J-4E",I)[0]);b F=A("#"+H);6(!F.l){F=A(G.22).x("1t",H).n(G.19).i("1g.5",y)}F.n(G.1x);6(C>=2.$m.l){I.2p(2.k);F.2p(2.k[0].3i)}r{I.3j(2.$m[C]);F.3j(2.$j[C])}G.h=A.1E(G.h,4(K,J){7 K>=C?++K:K});2.1w();6(2.$5.l==1){I.n(G.o);F.u(G.19);b B=A.i(2.$5[0],"v.5");6(B){2.v(C,B)}}2.14("1d",p,2.c(2.$5[C],2.$j[C]))},11:4(B){b D=2.d,E=2.$m.W(B).11(),C=2.$j.W(B).11();6(E.1j(D.o)&&2.$5.l>1){2.1m(B+(B+1<2.$5.l?1:-1))}D.h=A.1E(A.3k(D.h,4(G,F){7 G!=B}),4(G,F){7 G>=B?--G:G});2.1w();2.14("11",p,2.c(E.2t("a")[0],C[0]))},2a:4(B){b C=2.d;6(A.1v(B,C.h)==-1){7}b D=2.$m.W(B).u(C.1f);6(A.U.58){D.q("1q","4F-1D");1K(4(){D.q("1q","1D")},0)}C.h=A.3k(C.h,4(F,E){7 F!=B});2.14("2a",p,2.c(2.$5[B],2.$j[B]))},1Z:4(C){b B=2,D=2.d;6(C!=D.e){2.$m.W(C).n(D.1f);D.h.29(C);D.h.3l();2.14("1Z",p,2.c(2.$5[C],2.$j[C]))}},1m:4(B){6(1r B=="1i"){B=2.$5.Y(2.$5.V("[t$="+B+"]")[0])}2.$5.W(B).4G(2.d.18)},v:4(G,K){b L=2,D=2.d,E=2.$5.W(G),J=E[0],H=K==1n||K===f,B=E.i("v.5");K=K||4(){};6(!B||!H&&A.i(J,"1b.5")){K();7}b M=4(N){b O=A(N),P=O.2t("*:4I");7 P.l&&P.4H(":4R(4S)")&&P||O};b C=4(){L.$5.V("."+D.1B).u(D.1B).z(4(){6(D.1P){M(2).52().1F(M(2).i("1L.5"))}});L.1J=p};6(D.1P){b I=M(J).1F();M(J).51("<2u></2u>").2t("2u").i("1L.5",I).1F(D.1P)}b F=A.1u({},D.1M,{2X:B,2h:4(O,N){A(J.15).1F(O);C();6(D.1b){A.i(J,"1b.5",y)}L.14("v",p,L.c(L.$5[G],L.$j[G]));D.1M.2h&&D.1M.2h(O,N);K()}});6(2.1J){2.1J.53();C()}E.n(D.1B);1K(4(){L.1J=A.54(F)},0)},2X:4(C,B){2.$5.W(C).1y("1b.5").i("v.5",B)},1g:4(){b B=2.d;2.k.12(".5").u(B.25).1y("5");2.$5.z(4(){b C=A.i(2,"t.5");6(C){2.t=C}b D=A(2).12(".5");A.z(["t","v","1b"],4(F,E){D.1y(E+".5")})});2.$m.1d(2.$j).z(4(){6(A.i(2,"1g.5")){A(2).11()}r{A(2).u([B.o,B.26,B.1f,B.1x,B.19].56(" "))}})}});A.c.5.1z={1R:f,18:"2f",h:[],X:p,1P:"55&#50;",1b:f,2W:"c-5-",1M:{},1h:p,2V:\'<1O><a t="#{t}"><2T>#{1L}</2T></a></1O>\',22:"<23></23>",25:"c-5-4Z",o:"c-5-e",26:"c-5-1R",1f:"c-5-h",1x:"c-5-2Z",19:"c-5-4U",1B:"c-5-4T"};A.c.5.30="l";A.1u(A.c.5.1k,{2d:p,4V:4(C,F){F=F||f;b B=2,E=2.d.e;4 G(){B.2d=4W(4(){E=++E<B.$5.l?E:0;B.1m(E)},C)}4 D(H){6(!H||H.4Y){4X(B.2d)}}6(C){G();6(!F){2.$5.w(2.d.18,D)}r{2.$5.w(2.d.18,4(){D();E=B.d.e;G()})}}r{D();2.$5.12(2.d.18,D)}}})})(2l);', 62, 347, '||this||function|tabs|if|return||||var|ui|options|selected|false||disabled|data|panels|element|length|lis|addClass|selectedClass|null|css|else||href|removeClass|load|bind|attr|true|each|||||||||||||||||||||browser|filter|eq|cookie|index|_mouseStarted||remove|unbind||_trigger|hash|||event|hideClass|test|cache|widgetName|add|msie|disabledClass|destroy|fx|string|hasClass|prototype|replace|select|undefined|_setData|widget|display|typeof|unselectable|id|extend|inArray|_tabify|panelClass|removeData|defaults|_mouseUp|loadingClass|cssCache|block|map|html|apply|_mouseDownEvent|plugins|xhr|setTimeout|label|ajaxOptions|blur|li|spinner|mouseDelayMet|unselect|stop|get|_getData|Math|_init|widgetEventPrefix|none|disable||_mouseDrag|panelTemplate|div|delay|navClass|unselectClass||for|push|enable|cancel|_mouseDelayMet|rotation|opacity|click|style|success|duration|split|_|jQuery|target|_mouseDistanceMet|fn|appendTo|_tabId|_mouseUpDelegate|hidden|find|em|_mouseStart|show|location|_mouseMoveDelegate|distance|mouse|overflow|concat|type|widgetBaseClass|triggerHandler|title|call|5000px|width|option|getterSetter|parents|animate|height|Array|arguments|metadata|mousemove|span|_mouseUnselectable|tabTemplate|idPrefix|url|_mouseCapture|panel|getter|selectstart|||||||||MozUserSelect|left|body|on|_mouseMove|_mouseDown|abs|pageX|parentNode|insertBefore|grep|sort|pageY|_mouseStop|button|mouseup|document|removeChild|catch|absolute|top|rgba|position|backgroundImage|cursor|auto|transparent|backgroundColor|default|try|PERIOD|ENTER|ESCAPE|END|DOWN|CONTROL|DELETE|HOME|INSERT|NUMPAD_DECIMAL|110|107|NUMPAD_ADD|LEFT|188|COMMA|tabbable|nodeName|expr|dir|visibility|toLowerCase||tabIndex|BACKSPACE|CAPS_LOCK|keyCode|||textarea|input|NUMPAD_DIVIDE|111|new|isFunction|substring|slice|UP|eventPrefix|setData|in|class|plugin|fix|getData|TAB|SPACE|106|NUMPAD_SUBTRACT|NUMPAD_MULTIPLY|108|NUMPAD_ENTER|109|PAGE_DOWN|RIGHT|SHIFT|190|disableSelection|PAGE_UP|gen|unique|enableSelection|child|inline|trigger|is|last|first|indexOf|UI|throw|Tabs|Mismatching|identifier|fragment|not|img|loading|hide|rotate|setInterval|clearInterval|clientX|nav|8230|wrapInner|parent|abort|ajax|Loading|join|visible|safari|scrollTop|z0|Za|tab|has|opera|insertAfter|_mouseInit|mousedown|preventDefault|which|_mouseDelayTimer|_mouseDestroy|max|started|siblings|500|scrollLeft|off|normal|window|constructor|unload|parseInt|min|scrollTo|hasScroll|splice'.split('|'), 0, {}))

var JSON = function() {
 var m = {
   '\b': '\\b',
   '\t': '\\t',
   '\n': '\\n',
   '\f': '\\f',
   '\r': '\\r',
   '"': '\\"',
   '\\': '\\\\'
  },
  s = {
   'boolean': function(x) {
    return String(x);
   },
   number: function(x) {
    return isFinite(x) ? String(x) : 'null';
   },
   string: function(x) {
    if (/["\\\x00-\x1f]/.test(x)) {
     x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
      var c = m[b];
      if (c) {
       return c;
      }
      c = b.charCodeAt();
      return '\\u00' +
       Math.floor(c / 16).toString(16) +
       (c % 16).toString(16);
     });
    }
    return '"' + x + '"';
   },
   object: function(x) {
    if (x) {
     var a = [],
      b, f, i, l, v;
     if (x instanceof Array) {
      a[0] = '[';
      l = x.length;
      for (i = 0; i < l; i += 1) {
       v = x[i];
       f = s[typeof v];
       if (f) {
        v = f(v);
        if (typeof v == 'string') {
         if (b) {
          a[a.length] = ',';
         }
         a[a.length] = v;
         b = true;
        }
       }
      }
      a[a.length] = ']';
     } else if (x instanceof Object) {
      a[0] = '{';
      for (i in x) {
       v = x[i];
       f = s[typeof v];
       if (f) {
        v = f(v);
        if (typeof v == 'string') {
         if (b) {
          a[a.length] = ',';
         }
         a.push(s.string(i), ':', v);
         b = true;
        }
       }
      }
      a[a.length] = '}';
     } else {
      return;
     }
     return a.join('');
    }
    return 'null';
   }
  };
 return {
  copyright: '(c)2005 JSON.org',
  license: 'http://www.crockford.com/JSON/license.html',
  stringify: function(v) {
   var f = s[typeof v];
   if (f) {
    v = f(v);
    if (typeof v == 'string') {
     return v;
    }
   }
   return null;
  },
  parse: function(text) {
   try {
    return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g, ''))) && eval('(' + text + ')');
   } catch (e) {
    return false;
   }
  }
 };
}();

function jCT(txt, path) {
 this.Fn = new arguments.callee.Instance(txt, path);
 for (var i in this)
  this.Fn.Reserve += ',' + i + ',';
}
jCT.prototype = {
 Extend: function(jct) {
  for (var i in jct) {
   if (this[i] && this[i].Fn && this[i].Fn.JavaScriptCommonTemplates && this[i].Extend)
    this[i].Extend(jct[i]);
   else if (this.Fn.Reserve.indexOf(',' + i + ',') == -1)
    this[i] = jct[i];
  }
  if (typeof jct.RunNow == 'function')
   jct.RunNow.call(this);
  return this;
 },
 ExtendTo: function(jct) {
  for (var i in this) {
   if (this.Fn.Reserve.indexOf(',' + i + ',') > 0 && jct[i]) continue;
   if (jct[i] == null)
    jct[i] = this[i];
   else if (this[i].Fn && this[i].Fn.JavaScriptCommonTemplates && this[i].ExtendTo)
    this[i].ExtendTo(jct[i]);
  }
  if (typeof jct.RunNow == 'function')
   jct.RunNow();
  return this;
 },
 ExecChilds: function(childs, exec) {
  if (typeof childs == 'string') {
   exec = childs;
   childs = 0;
  } else
   exec = exec || 'Exec';
  if (!childs) {
   childs = {};
   for (var c in this)
    if (this[c].Fn && this[c].Fn.JavaScriptCommonTemplates)
     childs[c] = false;
  }
  for (var c in childs)
   if (this[c] && (typeof this[c][exec] == 'function')) {
    this[c][exec](childs[c]);
   }
  return this;
 },
 BuildChilds: function(childs) {
  if (undefined == childs) childs = [];
  if (typeof childs == 'string') childs = childs.split(',');
  var cs = {};
  for (var i = 0; i < childs.length; i++) cs[childs[i]] = true;
  for (var i in this)
   if (this[i].Fn && this[i].Fn.JavaScriptCommonTemplates && (childs.length == 0 || cs[i]))
    this[i].Build();
  return this;
 },
 GetView: function() {
  return 'Invalid templates';
 },
 GetViewContinue: function() {
  return 'Invalid templates';
 },
 Build: function(txt, path) {
  this.Fn.Init(txt, path);
  this.Fn.Build(this);
  return this;
 }
};
jCT.Instance = function(txt, path) {
 this.Src = txt || '';
 this.Path = path || '';
};
jCT.Instance.prototype = {
 JavaScriptCommonTemplates: 3.0,
 Reserve: '',
 Tags: {
  comment: {
   block: {
    begin: '<!---',
    end: '-->'
   },
   exp: {
    begin: '+-',
    end: '-+'
   },
   member: {
    begin: '/*+',
    end: '*/'
   },
   memberend: {
    begin: '/*-',
    end: '*/'
   },
   clean: {
    begin: '<!--clean',
    end: '/clean-->'
   }
  },
  script: {
   block: {
    begin: '<script type="text/jct">',
    end: '</script>'
   },
   exp: {
    begin: '+-',
    end: '-+'
   },
   member: {
    begin: '/*+',
    end: '*/'
   },
   memberend: {
    begin: '/*-',
    end: '*/'
   },
   clean: {
    begin: '<!--clean',
    end: '/clean-->'
   }
  },
  code: {
   block: {
    begin: '<code class="jct">',
    end: '</code>'
   },
   exp: {
    begin: '+-',
    end: '-+'
   },
   member: {
    begin: '/*+',
    end: '*/'
   },
   memberend: {
    begin: '/*-',
    end: '*/'
   },
   clean: {
    begin: '<!--clean',
    end: '/clean-->'
   }
  }
 },
 Init: function(txt, path) {
  if (txt != undefined) this.Src = txt;
  if (path != undefined) this.Path = path;
  for (var tag in this.Tags)
   if (this.Src.indexOf(this.Tags[tag].block.begin) >= 0) break;
  this.Tag = this.Tags[tag];
  this.A = [];
  this.V = [];
  this.EXEC = [];
  var a = [];
  var p = [0, 0, 0, 0, 0];
  var max = this.Src.length;
  while (this.Slice(this.Tag.clean, p[4], p, max))
   a.push(this.Src.slice(p[0], p[1]));
  if (a.length) {
   a.push(this.Src.slice(p[4]));
   this.Src = a.join('');
  }
 },
 Build: function(self) {
  this.EXEC = [];
  this.Parse(self);
  try {
   var code = this.EXEC.join('\n');
   self.GetViewContinue = new Function(code);
   self.GetView = function() {
    this.Fn.V = [];
    this.GetViewContinue.apply(this, arguments);
    return this.Fn.V.join('');
   };
  } catch (ex) {
   this.V = ['jCT Parse Error'];
   self.ERROR = {
    message: ex.message + '\n' + (ex.lineNumber || ex.number),
    code: code
   };
  }
  if (self.RunNow)
   self.RunNow();
 },
 Parse: function(self) {
  var tag = this.Tag,
   A = this.A,
   E = this.EXEC,
   max = this.Src.length,
   p = [0, 0, 0, 0, 0],
   p1 = [0, 0, 0, 0, 0];
  while (this.Slice(tag.block, p[4], p, max)) {
   p1 = [0, 0, 0, 0, p[0]];
   while (this.Slice(tag.exp, p1[4], p1, p[1])) {
    E.push('this.Fn.V.push(this.Fn.A[' + A.length + ']);');
    A.push(this.Src.slice(p1[0], p1[1]));
    E.push('this.Fn.V.push(' + this.Src.slice(p1[2], p1[3]) + ');');
   }
   E.push('this.Fn.V.push(this.Fn.A[' + A.length + ']);');
   A.push(this.Src.slice(p1[4], p[1]));
   if (this.Slice(tag.member, p[2], p1, p[3])) {
    var str = this.Src.slice(p1[2], p1[3]);
    var foo = this.Src.slice(p1[4], p[3]);
    if (str.slice(0, 1) == '@') {
     var child = tag.block.begin + tag.memberend.begin + str + tag.memberend.end + tag.block.end;
     var tmp = this.Src.indexOf(child, p[4]);
     if (tmp > 0) {
      var njct = new jCT(this.Src.slice(p[4], tmp), this.Path);
      if (!self[str.slice(1)]) self[str.slice(1)] = {};
      for (var j in njct)
       self[str.slice(1)][j] = njct[j];
      p[4] = tmp + child.length;
     }
    } else if (str.slice(0, 1) == '$') {
     var obj = new Function('return ' + foo + ';');
     self[str.slice(1)] = obj.call(self);
    } else
     self[str] = new Function(foo);
   } else
    E.push(this.Src.slice(p[2], p[3]));
  }
  p1 = [0, 0, 0, 0, p[4]];
  p[1] = max;
  while (this.Slice(tag.exp, p1[4], p1, p[1])) {
   E.push('this.Fn.V.push(this.Fn.A[' + A.length + ']);');
   A.push(this.Src.slice(p1[0], p1[1]));
   E.push('this.Fn.V.push(' + this.Src.slice(p1[2], p1[3]) + ');');
  }
  E.push('this.Fn.V.push(this.Fn.A[' + A.length + ']);');
  A.push(this.Src.slice(p1[4], p[1]));
 },
 Slice: function(tn, b1, p, max) {
  var begin = tn.begin;
  var end = tn.end;
  var e1, b2, e2;
  e1 = this.Src.indexOf(begin, b1);
  if (e1 < 0 || e1 >= max) return false;
  b2 = e1 + begin.length;
  if (b2 < 0 || b2 >= max) return false;
  e2 = this.Src.indexOf(end, b2);
  if (e2 < 0 || e2 >= max) return false;
  p[0] = b1;
  p[1] = e1;
  p[2] = b2;
  p[3] = e2;
  p[4] = e2 + end.length;
  return true;
 }
};

var ua = navigator.userAgent.toLowerCase();
var isOpera = (ua.indexOf('opera') > -1);
var isSafari = (ua.indexOf('safari') > -1);
var isIE = (!isOpera && ua.indexOf('msie') > -1);
var isNs = ua.indexOf('mozilla') > -1;
var ORDER_ASC = 'asc';
var ORDER_DESC = 'desc';
var TYPE_LUNAR = 'lunar';
var ieBody = (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
var bind = function(func, obj) {
 var __method = func;
 return function() {
  var args = [];
  for (var i = 0; i < arguments.length; i++)
   args[i] = arguments[i];
  return __method.apply(obj, args);
 }
};

jQuery.dom = function(elementId) {
  return document.getElementById(elementId);
};

jQuery.fn.extend({
 innerHTML: function(html) {
  if (arguments.length == 0) {
   return this[0].innerHTML;
  }
  this[0].innerHTML = html;
  return this;
 }
});

(function($) {
 $.fn.hoverIntent = function(f, g) {
  var cfg = {
   sensitivity: 7,
   interval: 100,
   timeout: 0
  };
  cfg = $.extend(cfg, g ? {
   over: f,
   out: g
  } : f);
  var cX, cY, pX, pY;
  var track = function(ev) {
   cX = ev.pageX;
   cY = ev.pageY;
  };
  var compare = function(ev, ob) {
   ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
   if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
    $(ob).unbind("mousemove", track);
    ob.hoverIntent_s = 1;
    return cfg.over.apply(ob, [ev]);
   } else {
    pX = cX;
    pY = cY;
    ob.hoverIntent_t = setTimeout(function() {
     compare(ev, ob);
    }, cfg.interval);
   }
  };
  var delay = function(ev, ob) {
   ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
   ob.hoverIntent_s = 0;
   return cfg.out.apply(ob, [ev]);
  };
  var handleHover = function(e) {
   var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
   while (p && p != this) {
    try {
     p = p.parentNode;
    } catch (e) {
     p = this;
    }
   }
   if (p == this) {
    return false;
   }
   var ev = jQuery.extend({}, e);
   var ob = this;
   if (ob.hoverIntent_t) {
    ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
   }
   if (e.type == "mouseover") {
    pX = ev.pageX;
    pY = ev.pageY;
    $(ob).bind("mousemove", track);
    if (ob.hoverIntent_s != 1) {
     ob.hoverIntent_t = setTimeout(function() {
      compare(ev, ob);
     }, cfg.interval);
    }
   } else {
    $(ob).unbind("mousemove", track);
    if (ob.hoverIntent_s == 1) {
     ob.hoverIntent_t = setTimeout(function() {
      delay(ev, ob);
     }, cfg.timeout);
    }
   }
  };
  return this.mouseover(handleHover).mouseout(handleHover);
 };
})(jQuery);

function StringBuffer() {
  this._strings = new Array();
}
StringBuffer.prototype.append = function(str) {
 this._strings.push(str);
 return this;
};
StringBuffer.prototype.toString = function() {
 var str = arguments.length == 0 ? '' : arguments[0];
 return this._strings.join(str);
};
String.prototype.leftpad = function(len, str) {
 if (!str) {
  str = '0';
 }
 var s = '';
 for (var i = 0; i < len - this.length; i++) {
  s += str;
 }
 return s + this;
}

if (!window.rili) {
 window.rili = new Object();
}
if (!window.rili.controls) {
 window.rili.controls = new Object();
}
if (!window.rili.util) {
 window.rili.util = new Object();
}
var $breakEvent = new Object();
var HuangLi = {};
var lunarInfo = new Array(0x4bd8, 0x4ae0, 0xa570, 0x54d5, 0xd260, 0xd950, 0x5554, 0x56af, 0x9ad0, 0x55d2, 0x4ae0, 0xa5b6, 0xa4d0, 0xd250, 0xd295, 0xb54f, 0xd6a0, 0xada2, 0x95b0, 0x4977, 0x497f, 0xa4b0, 0xb4b5, 0x6a50, 0x6d40, 0xab54, 0x2b6f, 0x9570, 0x52f2, 0x4970, 0x6566, 0xd4a0, 0xea50, 0x6a95, 0x5adf, 0x2b60, 0x86e3, 0x92ef, 0xc8d7, 0xc95f, 0xd4a0, 0xd8a6, 0xb55f, 0x56a0, 0xa5b4, 0x25df, 0x92d0, 0xd2b2, 0xa950, 0xb557, 0x6ca0, 0xb550, 0x5355, 0x4daf, 0xa5b0, 0x4573, 0x52bf, 0xa9a8, 0xe950, 0x6aa0, 0xaea6, 0xab50, 0x4b60, 0xaae4, 0xa570, 0x5260, 0xf263, 0xd950, 0x5b57, 0x56a0, 0x96d0, 0x4dd5, 0x4ad0, 0xa4d0, 0xd4d4, 0xd250, 0xd558, 0xb540, 0xb6a0, 0x95a6, 0x95bf, 0x49b0, 0xa974, 0xa4b0, 0xb27a, 0x6a50, 0x6d40, 0xaf46, 0xab60, 0x9570, 0x4af5, 0x4970, 0x64b0, 0x74a3, 0xea50, 0x6b58, 0x5ac0, 0xab60, 0x96d5, 0x92e0, 0xc960, 0xd954, 0xd4a0, 0xda50, 0x7552, 0x56a0, 0xabb7, 0x25d0, 0x92d0, 0xcab5, 0xa950, 0xb4a0, 0xbaa4, 0xad50, 0x55d9, 0x4ba0, 0xa5b0, 0x5176, 0x52bf, 0xa930, 0x7954, 0x6aa0, 0xad50, 0x5b52, 0x4b60, 0xa6e6, 0xa4e0, 0xd260, 0xea65, 0xd530, 0x5aa0, 0x76a3, 0x96d0, 0x4afb, 0x4ad0, 0xa4d0, 0xd0b6, 0xd25f, 0xd520, 0xdd45, 0xb5a0, 0x56d0, 0x55b2, 0x49b0, 0xa577, 0xa4b0, 0xaa50, 0xb255, 0x6d2f, 0xada0, 0x4b63, 0x937f, 0x49f8, 0x4970, 0x64b0, 0x68a6, 0xea5f, 0x6b20, 0xa6c4, 0xaaef, 0x92e0, 0xd2e3, 0xc960, 0xd557, 0xd4a0, 0xda50, 0x5d55, 0x56a0, 0xa6d0, 0x55d4, 0x52d0, 0xa9b8, 0xa950, 0xb4a0, 0xb6a6, 0xad50, 0x55a0, 0xaba4, 0xa5b0, 0x52b0, 0xb273, 0x6930, 0x7337, 0x6aa0, 0xad50, 0x4b55, 0x4b6f, 0xa570, 0x54e4, 0xd260, 0xe968, 0xd520, 0xdaa0, 0x6aa6, 0x56df, 0x4ae0, 0xa9d4, 0xa4d0, 0xd150, 0xf252, 0xd520);

var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("木", "木", "火", "火", "土", "土", "铁", "铁", "水", "水");
var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
var nStr2 = new Array('初', '十', '廿', '卅', '□');
var monthName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
var cmonthName = new Array('正', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '腊');
var sFtv = new Array("0101 藏历廿二", "0102 藏历廿三", "0103 藏历廿四", "0104 藏历廿五", "0105 藏历廿六", "0106 藏历廿七", "0107 藏历廿八", "0108 藏历廿九", "0109 藏历三十", "0110 藏历十二月", "0111 藏历初二", "0112 藏历初三", "0113 藏历初四", "0114 藏历初五", "0115 藏历初六", "0116 藏历初七", "0117 藏历初八", "0118 藏历初九", "0119 藏历初十", "0120 藏历十一", "0121 藏历十三", "0122 藏历十四", "0123 藏历十五", "0124 藏历十六", "0125 藏历十七", "0126 藏历十八", "0127 藏历十九", "0128 藏历十九", "0129 藏历廿  ", "0130 藏历廿一", "0131 藏历廿二", "0201 藏历廿三", "0202 藏历廿四", "0203 藏历廿五", "0204 藏历廿六", "0205 藏历廿七", "0206 藏历廿八", "0207 藏历廿九", "0208 藏历三十", "0209 藏历火猴年初一", "0210 藏历初二", "0211 藏历初三", "0212 藏历初四", "0213 藏历初五", "0214 藏历初七", "0215 藏历初八", "0216 藏历初九", "0217 藏历初十", "0218 藏历十一", "0219 藏历十二", "0220 藏历十三", "0221 藏历十四", "0222 藏历十五", "0223 藏历十六", "0224 藏历十七", "0225 藏历十八", "0226 藏历十九", "0227 藏历廿  ", "0228 藏历廿一", "0229 藏历廿二", "0301 藏历廿二", "0302 藏历廿三", "0303 藏历廿四", "0304 藏历廿五", "0305 藏历廿六", "0306 藏历廿七", "0307 藏历廿八", "0308 藏历廿九", "0309 藏历三十", "0310 藏历初二", "0311 藏历初三", "0312 藏历初四", "0313 藏历初五", "0314 藏历初六", "0315 藏历初七", "0316 藏历初八", "0317 藏历初九", "0318 藏历初十", "0319 藏历十一", "0320 藏历十二", "0321 藏历十三", "0322 藏历十四", "0323 藏历十五", "0324 藏历十六", "0325 藏历十七", "0326 藏历十八", "0327 藏历十九", "0328 藏历廿  ", "0329 藏历廿一", "0330 藏历廿二", "0331 藏历廿三", "0401 藏历廿四", "0402 藏历廿五", "0403 藏历廿六", "0404 藏历廿七", "0405 藏历廿八", "0406 藏历廿九", "0407 藏历三十", "0408 藏历三月", "0409 藏历初二", "0410 藏历初三", "0411 藏历初四", "0412 藏历初六", "0413 藏历初七", "0414 藏历初八", "0415 藏历初九", "0416 藏历初十", "0417 藏历十一", "0418 藏历十二", "0419 藏历十三", "0420 藏历十四", "0421 藏历十五", "0422 藏历十五", "0423 藏历十六", "0424 藏历十七", "0425 藏历十八", "0426 藏历十九", "0427 藏历廿  ", "0428 藏历廿一", "0429 藏历廿二", "0430 藏历廿三", "0501 藏历廿四", "0502 藏历廿五", "0503 藏历廿六", "0504 藏历廿七", "0505 藏历廿八", "0506 藏历三十", "0507 藏历四月", "0508 藏历初二", "0509 藏历初三", "0510 藏历初四", "0511 藏历初五", "0512 藏历初六", "0513 藏历初七", "0514*佛诞辰日", "0515 藏历初九", "0516 藏历初十", "0517 藏历十一", "0518 藏历十二", "0519 藏历十三", "0520 藏历十四", "0521 藏历十五", "0522 藏历十六", "0523 藏历十七", "0524 藏历十八", "0525 藏历十九", "0526 藏历廿  ", "0527 藏历廿一", "0528 藏历廿二", "0529 藏历廿三", "0530 藏历廿四", "0531 藏历廿五", "0601 藏历廿六", "0602 藏历廿七", "0603 藏历廿八", "0604 藏历廿九", "0605 藏历三十", "0606 藏历四月", "0607 藏历初三", "0608 藏历初四", "0609 藏历初五", "0610 藏历初六", "0611 藏历初七", "0612 藏历初八", "0613 藏历初九", "0614 藏历初十", "0615 藏历初十", "0616 藏历十一", "0617 藏历十二", "0618 藏历十三", "0619 藏历十四", "0620 藏历十五", "0621 藏历十六", "0622 藏历十七", "0623 藏历十八", "0624 藏历十九", "0625 藏历廿  ", "0626 藏历廿一", "0627 藏历廿二", "0628 藏历廿三", "0629 藏历廿四", "0630 藏历廿六", "0701 藏历廿七", "0702 藏历廿八", "0703 藏历廿九", "0704 藏历三十", "0705 藏历五月", "0706 藏历初二", "0707 藏历初三", "0708 藏历初四", "0709 藏历初五", "0710 藏历初六", "0711 藏历初七", "0712 藏历初八", "0713 藏历初九", "0714 藏历初十", "0715 藏历十一", "0716 藏历十二", "0717 藏历十三", "0718 藏历十四", "0719 藏历十五", "0720 藏历十六", "0721 藏历十七", "0722 藏历十八", "0723 藏历十九", "0724 藏历廿  ", "0725 藏历廿一", "0726 藏历廿二", "0727 藏历廿三", "0728 藏历廿四", "0729 藏历廿五", "0730 藏历廿六", "0731 藏历廿七", "0801 藏历廿九", "0802 藏历三十", "0803 藏历六月", "0804 藏历初二", "0805 藏历初三", "0806 藏历初四", "0807 藏历初五", "0808 藏历初六", "0809 藏历初六", "0810 藏历初七", "0811 藏历初八", "0812 藏历初九", "0813 藏历初十", "0814 藏历十一", "0815 藏历十二", "0816 藏历十三", "0817 藏历十四", "0818 藏历十五", "0819 藏历十六", "0820 藏历十七", "0821 藏历十八", "0822 藏历十九", "0823 藏历廿一", "0824 藏历廿二", "0825 藏历廿三", "0826 藏历廿四", "0827 藏历廿五", "0828 藏历廿六", "0829 藏历廿七", "0830 藏历廿八", "0831 藏历廿九", "0901 藏历三十", "0902 藏历七月", "0903 藏历初二", "0904 藏历初三", "0905 藏历初四", "0906 藏历初五", "0907 藏历初六", "0908 藏历初七", "0909 藏历初八", "0910 藏历初九", "0911 藏历初十", "0912 藏历十一", "0913 藏历十二", "0914 藏历十三", "0915 藏历十四", "0916 藏历十五", "0917 藏历十六", "0918 藏历十七", "0919 藏历十八", "0920 藏历十九", "0921 藏历廿  ", "0922 藏历廿一", "0923 藏历廿二", "0924 藏历廿四", "0925 藏历廿五", "0926 藏历廿六", "0927 藏历廿七", "0928 藏历廿八", "0929 藏历廿九", "0930 藏历三十", "1001 藏历八月", "1002 藏历初二", "1003 藏历初二", "1004 藏历初三", "1005 藏历初四", "1006 藏历初五", "1007 藏历初六", "1008 藏历初七", "1009 藏历初八", "1010 藏历初九", "1011 藏历初十", "1012 藏历十一", "1013 藏历十二", "1014 藏历十三", "1015 藏历十四", "1016 藏历十五", "1017 藏历十六", "1018 藏历十八", "1019 藏历十九", "1020 藏历廿  ", "1021 藏历廿一", "1022 藏历廿二", "1023 藏历廿三", "1024 藏历廿四", "1025 藏历廿五", "1026 藏历廿六", "1027 藏历廿七", "1028 藏历廿八", "1029 藏历廿九", "1030 藏历三十", "1031 藏历九月", "1101 藏历初二", "1102 藏历初三", "1103 藏历初四", "1104 藏历初五", "1105 藏历初六", "1106 天降初七", "1107 藏历初八", "1108 藏历初九", "1109 藏历初十", "1110 藏历十一", "1111 藏历十二", "1112 藏历十三", "1113 藏历十四", "1114 藏历十五", "1115 藏历十六", "1116 藏历十七", "1117 藏历十八", "1118 藏历十九", "1119 藏历廿  ", "1120 藏历廿二", "1121 藏历廿三", "1122 藏历廿四", "1123 藏历廿五", "1124 藏历廿六", "1125 藏历廿六", "1126 藏历廿七", "1127 藏历廿八", "1128 藏历廿九", "1129 藏历三十", "1130 藏历十月", "1201 藏历初二", "1202 藏历初三", "1203 藏历初四", "1204 藏历初五", "1205 藏历初六", "1206 藏历初七", "1207 藏历初八", "1208 藏历初九", "1209 藏历初十", "1210 藏历十一", "1211 藏历十二", "1212 藏历十三", "1213 藏历十五", "1214 藏历十六", "1215 藏历十七", "1216 藏历十八", "1217 藏历十九", "1218 藏历廿  ", "1219 藏历廿一", "1220 藏历廿二", "1221 藏历廿三", "1222 藏历廿四", "1223 藏历廿五", "1224 藏历廿六", "1225 藏历廿七", "1226 藏历廿八", "1227 藏历廿九", "1228 藏历三十", "1229 藏历三十", "1230 藏历十一月", "1231 藏历初二");
var wFtv = new Array();
var lFtv = new Array();

function lYearDays(y) {
 var i, sum = 348;
 for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
 return (sum + leapDays(y));
}

function leapDays(y) {
 if (leapMonth(y)) return ((lunarInfo[y - 1899] & 0xf) == 0xf ? 30 : 29);
 else return (0);
}

function leapMonth(y) {
 var lm = lunarInfo[y - 1900] & 0xf;
 return (lm == 0xf ? 0 : lm);
}

function monthDays(y, m) {
 return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}

function Lunar(objDate) {
 var i, leap = 0,
  temp = 0;
 var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
 for (i = 1900; i < 2100 && offset > 0; i++) {
  temp = lYearDays(i);
  offset -= temp;
 }
 if (offset < 0) {
  offset += temp;
  i--;
 }
 this.year = i;
 leap = leapMonth(i);
 this.isLeap = false;
 for (i = 1; i < 13 && offset > 0; i++) {
  if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
   --i;
   this.isLeap = true;
   temp = leapDays(this.year);
  } else {
   temp = monthDays(this.year, i);
  }
  if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;
  offset -= temp;
 }
 if (offset == 0 && leap > 0 && i == leap + 1)
  if (this.isLeap) {
   this.isLeap = false;
  } else {
   this.isLeap = true;
   --i;
  }
 if (offset < 0) {
  offset += temp;
  --i;
 }
 this.month = i;
 this.day = offset + 1;
}

function getSolarDate(lyear, lmonth, lday, isLeap) {
 var offset = 0;
 for (var i = 1900; i < lyear; i++) {
  offset += lYearDays(i);
 }
 for (var i = 1; i < lmonth; i++) {
  if (i == leapMonth(lyear)) {
   offset += leapDays(lyear);
  }
  offset += monthDays(lyear, i);
 }
 if (isLeap) {
  offset += monthDays(lyear, i);
 }
 offset += parseInt(lday) - 1;
 var baseDate = new Date(1900, 0, 31);
 var solarDate = new Date(baseDate.valueOf() + offset * 86400000);
 return solarDate;
}

function solarDays(y, m) {
 if (m == 1)
  return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
 else
  return (solarMonth[m]);
}

function cyclical(num) {
 return (Gan[num % 10] + Animals[num % 12]);
}

function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {
 this.isToday = false;
 this.sYear = sYear;
 this.sMonth = sMonth;
 this.sDay = sDay;
 this.week = week;
 this.lYear = lYear;
 this.lMonth = lMonth;
 this.lDay = lDay;
 this.isLeap = isLeap;
 this.cYear = cYear;
 this.cMonth = cMonth;
 this.cDay = cDay;
 this.color = '';
 this.lunarFestival = '';
 this.solarFestival = '';
 this.solarTerms = '';
}

function sTerm(y, n) {
 var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
 return (offDate.getUTCDate());
}

function calendar(y, m) {
 var sDObj, lDObj, lY, lM, lD = 1,
  lL, lX = 0,
  tmp1, tmp2, tmp3;
 var cY, cM, cD;
 var lDPOS = new Array(3);
 var n = 0;
 var firstLM = 0;
 sDObj = new Date(y, m, 1, 0, 0, 0, 0);
 this.length = solarDays(y, m);
 this.firstWeek = sDObj.getDay();
 if (m < 2) cY = cyclical(y - 1900 + 36 - 1);
 else cY = cyclical(y - 1900 + 36);
 var term2 = sTerm(y, 2);
 var firstNode = sTerm(y, m * 2)
 cM = cyclical((y - 1900) * 12 + m + 12);
 var dayCyclical = Date.UTC(y, m, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
 for (var i = 0; i < this.length; i++) {
  if (lD > lX) {
   sDObj = new Date(y, m, i + 1);
   lDObj = new Lunar(sDObj);
   lY = lDObj.year;
   lM = lDObj.month;
   lD = lDObj.day;
   lL = lDObj.isLeap;
   lX = lL ? leapDays(lY) : monthDays(lY, lM);
   if (n == 0) firstLM = lM;
   lDPOS[n++] = i - lD + 1;
  }
  if (m == 1 && (i + 1) == term2) cY = cyclical(y - 1900 + 36);
  if ((i + 1) == firstNode) cM = cyclical((y - 1900) * 12 + m + 13);
  cD = cyclical(dayCyclical + i);
  this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + this.firstWeek) % 7], lY, lM, lD++, lL, cY, cM, cD);
 }
 for (i in sFtv)
  if (sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
   if (Number(RegExp.$1) == (m + 1)) {
    this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ' ';
    if (RegExp.$3 == '*') this[Number(RegExp.$2) - 1].color = 'red';
   }
 for (i in wFtv)
  if (wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
   if (Number(RegExp.$1) == (m + 1)) {
    tmp1 = Number(RegExp.$2);
    tmp2 = Number(RegExp.$3);
    if (tmp1 < 5)
     this[((this.firstWeek > tmp2) ? 7 : 0) + 7 * (tmp1 - 1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
    else {
     tmp1 -= 5;
     tmp3 = (this.firstWeek + this.length - 1) % 7;
     this[this.length - tmp3 - 7 * tmp1 + tmp2 - (tmp2 > tmp3 ? 7 : 0) - 1].solarFestival += RegExp.$5 + ' ';
    }
   }
 for (i in lFtv)
  if (lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
   tmp1 = Number(RegExp.$1) - firstLM;
   if (tmp1 == -11) tmp1 = 1;
   if (tmp1 >= 0 && tmp1 < n) {
    tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1;
    if (tmp2 >= 0 && tmp2 < this.length && this[tmp2].isLeap != true) {
     this[tmp2].lunarFestival += RegExp.$4 + ' ';
     if (RegExp.$3 == '*') this[tmp2].color = 'red';
    }
   }
  }
}

function easter(y) {
 var term2 = sTerm(y, 5);
 var dayTerm2 = new Date(Date.UTC(y, 2, term2, 0, 0, 0, 0));
 var lDayTerm2 = new Lunar(dayTerm2);
 if (lDayTerm2.day < 15)
  var lMlen = 15 - lDayTerm2.day;
 else
  var lMlen = (lDayTerm2.isLeap ? leapDays(y) : monthDays(y, lDayTerm2.month)) - lDayTerm2.day + 15;
 var l15 = new Date(dayTerm2.getTime() + 86400000 * lMlen);
 var dayEaster = new Date(l15.getTime() + 86400000 * (7 - l15.getUTCDay()));
 this.m = dayEaster.getUTCMonth();
 this.d = dayEaster.getUTCDate();
}

function cDay(d) {
 var s;
 switch (d) {
  case 10:
   s = '初十';
   break;
  case 20:
   s = '二十';
   break;
   break;
  case 30:
   s = '三十';
   break;
   break;
  default:
   s = nStr2[Math.floor(d / 10)];
   s += nStr1[d % 10];
 }
 return (s);
}
var colors = ['#CC3333', '#DD4477', '#994499', '#6633CC', '#336699', '#3366CC', '#22AA99', '#329262', '#109618', '#66AA00', '#AAAA11', '#D6AE00', '#EE8800', '#DD5511', '#A87070', '#8C6D8C', '#627487', '#7083A8', '#5C8D87', '#898951', '#B08B59'];

var options = {
 maxDetailHeight: 350,
 maxDetailItems: 20,
 firstDayOfWeek: 1,
 schedulePageSize: 20
};

var global = {
 currYear: -1,
 currMonth: -1,
 currDate: null,
 uid: null,
 username: null,
 email: null,
 single: false
};
var day_num;
var monthView;

function MonthViewObj(year, month) {
 this.cld = null;
 this.year = year;
 this.month = month;
 this.firstline = 0;
 this.linecount = 0;
}

var dateSelection = {
 currYear: -1,
 currMonth: -1,
 minYear: 2016,
 maxYear: 2016,
 beginYear: 0,
 endYear: 0,
 tmpYear: -1,
 tmpMonth: -1,
 init: function(year, month) {
  if (typeof year == 'undefined' || typeof month == 'undefined') {
   year = global.currYear;
   month = global.currMonth;
  }
  this.setYear(year);
  this.setMonth(month);
  this.showYearContent();
  this.showMonthContent();
 },
 show: function() {
  $.dom('dateSelectionDiv').style.display = 'block';
 },
 hide: function() {
  this.rollback();
  $.dom('dateSelectionDiv').style.display = 'none';
 },
 today: function() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  if (this.currYear != year || this.currMonth != month) {
   if (this.tmpYear == year && this.tmpMonth == month) {
    this.rollback();
   } else {
    this.init(year, month);
    this.commit();
   }
  }
 },
 go: function() {
  if (this.currYear == this.tmpYear && this.currMonth == this.tmpMonth) {
   this.rollback();
  } else {
   this.commit();
  }
  this.hide();
 },
 goToday: function() {
  this.today();
  this.hide();
 },
 goPrevMonth: function() {
  this.prevMonth();
  this.commit();
 },
 goNextMonth: function() {
  this.nextMonth();
  this.commit();
 },
 goPrevYear: function() {
  this.prevYear();
  this.commit();
 },
 goNextYear: function() {
  this.nextYear();
  this.commit();
 },
 changeView: function() {
  global.currYear = this.currYear;
  global.currMonth = this.currMonth;
  loadPage(global.currYear, global.currMonth);
 },
 commit: function() {
  if (this.tmpYear != -1 || this.tmpMonth != -1) {
   if (this.currYear != this.tmpYear || this.currMonth != this.tmpMonth) {
    this.showYearContent();
    this.showMonthContent();
    this.changeView();
    if (global.currYear > 2014 && global.currYear < 2015)
     if (eval("HuangLi.y" + global.currYear) == null) {
      var filename = "js/huangli/" + global.currYear + ".js";
      loadjscssfile(filename, "js");
     }
   }
   this.tmpYear = -1;
   this.tmpMonth = -1;
  }
 },
 rollback: function() {
  if (this.tmpYear != -1) {
   this.setYear(this.tmpYear);
  }
  if (this.tmpMonth != -1) {
   this.setMonth(this.tmpMonth);
  }
  this.tmpYear = -1;
  this.tmpMonth = -1;
  this.showYearContent();
  this.showMonthContent();
 },
 prevMonth: function() {
  var month = this.currMonth - 1;
  if (month == -1) {
   var year = this.currYear - 1;
   if (year >= this.minYear) {
    month = 11;
    this.setYear(year);
   } else {
    month = 0;
   }
  }
  this.setMonth(month);
 },
 nextMonth: function() {
  var month = this.currMonth + 1;
  if (month == 12) {
   var year = this.currYear + 1;
   if (year <= this.maxYear) {
    month = 0;
    this.setYear(year);
   } else {
    month = 11;
   }
  }
  this.setMonth(month);
 },
 prevYear: function() {
  var year = this.currYear - 1;
  if (year >= this.minYear) {
   this.setYear(year);
  }
 },
 nextYear: function() {
  var year = this.currYear + 1;
  if (year <= this.maxYear) {
   this.setYear(year);
  }
 },
 prevYearPage: function() {
  this.endYear = this.beginYear - 1;
  this.showYearContent(null, this.endYear);
 },
 nextYearPage: function() {
  this.beginYear = this.endYear + 1;
  this.showYearContent(this.beginYear, null);
 },
 selectYear: function() {
  var selectY = $('select[@name="SY"] option[@selected]').text();
  this.setYear(selectY);
  this.commit();
 },
 selectMonth: function() {
  var selectM = $('select[@name="SM"] option[@selected]').text();
  this.setMonth(selectM - 1);
  this.commit();
 },
 setYear: function(value) {
  if (this.tmpYear == -1 && this.currYear != -1) {
   this.tmpYear = this.currYear;
  }
  $('#SY' + this.currYear).removeClass('curr');
  this.currYear = value;
  $('#SY' + this.currYear).addClass('curr');
 },
 setMonth: function(value) {
  if (this.tmpMonth == -1 && this.currMonth != -1) {
   this.tmpMonth = this.currMonth;
  }
  $('#SM' + this.currMonth).removeClass('curr');
  this.currMonth = value;
  $('#SM' + this.currMonth).addClass('curr');
 },
 showYearContent: function(beginYear, endYear) {
  if (!beginYear) {
   if (!endYear) {
    endYear = this.currYear + 1;
   }
   this.endYear = endYear;
   if (this.endYear > this.maxYear) {
    this.endYear = this.maxYear;
   }
   this.beginYear = this.endYear - 3;
   if (this.beginYear < this.minYear) {
    this.beginYear = this.minYear;
    this.endYear = this.beginYear + 3;
   }
  }
  if (!endYear) {
   if (!beginYear) {
    beginYear = this.currYear - 2;
   }
   this.beginYear = beginYear;
   if (this.beginYear < this.minYear) {
    this.beginYear = this.minYear;
   }
   this.endYear = this.beginYear + 3;
   if (this.endYear > this.maxYear) {
    this.endYear = this.maxYear;
    this.beginYear = this.endYear - 3;
   }
  }
  var s = '';
  for (var i = this.beginYear; i <= this.endYear; i++) {
   s += '<span id="SY' + i + '" class="year" onclick="dateSelection.setYear(' + i + ')">' + i + '</span>';
  }
  s = "<span id=\"SY2016\" class=\"year\" onclick=\"dateSelection.setYear(2016)\">2016</span>";
  $.dom('yearListContent').innerHTML = s;
  $('#SY' + this.currYear).addClass('curr');
 },
 showMonthContent: function() {
  var s = '';
  for (var i = 0; i < 12; i++) {
   s += '<span id="SM' + i + '" class="month" onclick="dateSelection.setMonth(' + i + ')">' + (i + 1).toString() + '</span>';
  }
  $.dom('monthListContent').innerHTML = s;
  $('#SM' + this.currMonth).addClass('curr');
 }
};

var utils = {
 numToWeek: function(num) {
  switch (num) {
   case 1:
    return '一';
   case 2:
    return '二';
   case 3:
    return '三';
   case 4:
    return '四';
   case 5:
    return '五';
   case 6:
    return '六';
   case 0:
    return '日';
  }
 },
 getEvent: function(ev) {
  return window.event ? window.event : (ev ? ev : null);
 },
 getMousePosition: function(ev) {
  var evt = this.getEvent(ev);
  if (evt.pageX || evt.pageY) {
   return {
    x: evt.pageX,
    y: evt.pageY
   };
  }
  return {
   x: evt.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft,
   y: evt.clientY + document.documentElement.scrollTop - document.documentElement.clientTop
  };
 },
 getClientWidth: function() {
  return $.browser.msie ? ieBody.clientWidth : window.innerWidth;
 },
 getClientHeight: function() {
  return $.browser.msie ? ieBody.clientHeight : window.innerHeight;
 },
 getOffsetXY: function(obj, parentId) {
  var element;
  if (typeof obj == 'object') {
   element = obj;
  } else {
   element = document.getElementById(obj);
  }
  var element_X = element.offsetLeft;
  var element_Y = element.offsetTop;
  while (true) {
   if ((!element.offsetParent) || (!element.offsetParent.style) || (!!parentId && element.offsetParent.id == parentId)) {
    break;
   }
   element_X += element.offsetParent.offsetLeft;
   element_Y += element.offsetParent.offsetTop;
   element = element.offsetParent;
  }
  element_X = element_X - document.body.scrollLeft;
  element_Y = element_Y - document.body.scrollTop;
  return {
   x: element_X,
   y: element_Y
  };
 },
 getChinaNum: function(num) {
  var cNum = "";
  switch (num) {
   case 1:
    cNum = "一";
    break;
   case 2:
    cNum = "二";
    break;
   case 3:
    cNum = "三";
    break;
   case 4:
    cNum = "四";
    break;
   case 5:
    cNum = "五";
    break;
   case 6:
    cNum = "六";
    break;
   case 7:
    cNum = "七";
    break;
   case 8:
    cNum = "八";
    break;
   case 9:
    cNum = "九";
    break;
   case 10:
    cNum = "十";
    break;
   case 11:
    cNum = "十一";
    break;
   case 12:
    cNum = "腊";
    break;
  }
  return cNum;
 },
 getMonthKey: function(year, month) {
  return year.toString() + (month + 1).toString().leftpad(2)
 }
};

var tplMgr = {
 tplMap: {},
 getInstance: function(id) {
  var instance = this.tplMap[id];
  if (!instance) {
   instance = new jCT($.dom(id).value);
   instance.Build();
   this.tplMap[id] = instance;
  }
  return instance;
 }
};

var cacheMgr = {
 permissions: {},
 cldCache: {},
 getCld: function(year, month) {
  var key = utils.getMonthKey(year, month);
  var cld = this.cldCache[key];
  if (typeof cld == 'undefined') {
   cld = new calendar(year, month);
   this.cldCache[key] = cld;
  }
  return cld;
 },
 monthViewCache: {},
 getMonthView: function(year, month) {
  var key = utils.getMonthKey(year, month);
  var monthView = this.monthViewCache[key];
  if (typeof monthView == 'undefined') {
   var cld = this.getCld(year, month);
   var firstline = 7 - cld.firstWeek + options.firstDayOfWeek;
   firstline = firstline > 7 ? firstline - 7 : firstline;
   var linecount = Math.ceil((cld.length - firstline) / 7) + 1; // 计算总共需要的日期行数
   monthView = new MonthViewObj(year, month);
   monthView.cld = cld;
   monthView.firstline = firstline;
   monthView.linecount = linecount;
   this.monthViewCache[key] = monthView;
  }
  return monthView;
 },
 monthMap: {},
 getMonthCache: function(year, month) {
  var cache = this.monthMap[utils.getMonthKey(year, month)];
  if (typeof cache == 'undefined') {
   var view = this.getMonthView(year, month);
   var cld = view.cld;
   var firstline = view.firstline;
   var linecount = view.linecount;
   cache = new MonthCache(year, month);
   for (var i = 0; i < linecount; i++) {
    for (var j = 0; j < 7; j++) {
     var index = i * 7 + j;
     var dayInMonth = true;
     if ((index < (7 - firstline)) || (index >= (cld.length - firstline + 7))) {
      dayInMonth = false;
     }
     var dateNum = 0;
     if (dayInMonth) {
      dateNum = index - 7 + firstline + 1;
      var cell = new DateCell(dateNum, index);
      cache.dateMap[dateNum] = cell;
     }
    }
   }
   this.monthMap[utils.getMonthKey(year, month)] = cache;
  }
  return cache;
 }
};

var tabMgr = {
 switchTab: function(tabId, selectedId) {
  $('#' + tabId + ' li.selected').each(function() {
   $(this).removeClass('selected');
   $('#con_' + $(this).attr('id')).hide();
  });
  $('#' + selectedId).addClass('selected');
  $('#con_' + selectedId).show();
 }
}

function DateCell(date, index) {
 this.date = date;
 this.index = index;
 this.scheduleMap = {};
 this.cldIds = {};
 this.displayed = 0;
 this.count = 0;
 this.iconHTML = '';
 this.eventHTML = '';
 this.getClickAreaHTML = function() {
  var zero = utils.getOffsetXY('rg_rowy_h' + this.index, 'decowner');
  var el_rg_rowy = $.dom('rg_rowy_h' + this.index);
  var elCell = el_rg_rowy.parentNode;
  var w = elCell.offsetWidth;
  var h = elCell.offsetHeight;
  var instance = tplMgr.getInstance('detail_click_tpl');
  return instance.GetView({
   index: this.index,
   date: this.date,
   left: zero.x,
   top: zero.y - (elCell.offsetHeight - el_rg_rowy.offsetHeight),
   width: elCell.offsetWidth,
   height: elCell.offsetHeight
  });
 }
}

function MonthCache(year, month) {
 this.year = year;
 this.month = month;
 this.dateMap = {};
}

function loadPage(year, month) {
 var theme = new Theme();
 singleMgr.appendTheme(theme);
 monthView = cacheMgr.getMonthView(year, month);
 $.dom('yearValue').innerHTML = year.toString();
 $.dom('monthValue').innerHTML = (month + 1).toString().leftpad(2);
 if (year.toString() == "2012") {
  var _month = (month + 1).toString().leftpad(1);
  var _showContext = "";
  if (_month == "1")
   _showContext = "1月份: (缺日：廿四)";
  if (_month == "2")
   _showContext = "2月份: (重日：初二、十三  缺日：十二、十八  十二月初八：无垢光尊者涅槃纪念日)";
  if (_month == "3")
   _showContext = "3月份: (重日：初五  缺日：十二 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持明法会：一月初一至一月十五  [共十五天]  一月是神变月,</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在此月间，每做一件善事，其功德都会比平日行相同善法所得功德增上十万倍)";
  if (_month == "4")
   _showContext = "4月份: (缺日：十七)";
  if (_month == "5")
   _showContext = "5月份: (重日：廿九  缺日：初十)";
  if (_month == "6")
   _showContext = "6月份: (重日：廿四  缺日：十三，四月初八：释迦佛降生日 ，金刚萨埵法会：四月初八至四月十六日<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [共八天]，四月廿九：麦彭仁波切涅槃纪念法会)";
  if (_month == "7")
   _showContext = "7月份: (缺日：初六  地藏法会：六月初一至六月初八[共八天])";
  if (_month == "8")
   _showContext = "8月份: (重日：廿一  缺日：初九、初二  六月初四：释迦佛初转法轮日  六月初四：索达吉上师降生日)";
  if (_month == "10")
   _showContext = "10月份:(重日：十六  缺日：初五、廿八)";
  if (_month == "11")
   _showContext = "11月份:(缺日：初二  极乐法会：九月十八至九月廿五  [共八天])";
  if (_month == "12")
   _showContext = "12月份:(重日：初十  缺日：廿六)";
 }
 $.dom('lunarValue').innerHTML = '藏历' + cyclical(global.currYear - 1900 + 36) + '年' + "【" + Animals[(global.currYear - 4) % 12] + '年】';
 pageMgrRili.drawCalendar();
 pageMgrRili.adjustGridContainer();
}

function Theme() {
 this.bgColor = '#6b92d7';
 this.bgColor2 = '#ecf1ff';
 this.bgColor1 = '#c2cff1';
 this.bgColor3 = '#ffffff';
}

var indexMgr = {
 dateover: function(index, dataNum, event) {
  var dateTitle = $.dom('rg_rowy_h' + index);
  var dateCell = dateTitle.parentNode;
  dateTitle.style.backgroundColor = '#FBFFBC';
  dateCell.style.backgroundColor = '#FBFFBC';
  showDetailsRili(event, dataNum);
 },
 dateout: function(index) {
  var dateTitle = $.dom('rg_rowy_h' + index);
  var dateCell = dateTitle.parentNode;
  dateTitle.style.backgroundColor = '';
  dateCell.style.backgroundColor = '';
  dialogMgrRili.hide();
 }
};

var singleMgr = {
 appendTheme: function(theme) {
  $('.themeBgColor').each(function() {
   $(this).css('background-color', theme.bgColor);
  });
  $('.themeBgColor1').each(function() {
   $(this).css('background-color', theme.bgColor1);
  });
  $('.themeBgColorRili').each(function() {
   $(this).css('background-color', theme.bgColor2);
  });
  $('.themeBgColorRili1').each(function() {
   $(this).css('background-color', theme.bgColor3);
  });
 }
};

function gotoWeb(cid, sid) {
 window.open("/link.jsp?cid=" + cid + "&sid=" + sid + "&refer=" + escape(window.location));
}

function initRiliIndex() {
 var dateObj = new Date();
 global.currYear = dateObj.getFullYear();
 global.currMonth = dateObj.getMonth();
 loadPage(global.currYear, global.currMonth);
 dateSelection.init();
 hoverDialog();
}

var dateDetailNum;

function showDetailsRili(event, dateNum) {
 var op = {
  width: 328
 };
 var cld = cacheMgr.getCld(global.currYear, global.currMonth);
 var cld_day = cld[dateNum - 1];
 op.title = cld_day.sYear + '年' + cld_day.sMonth + '月' + cld_day.sDay + '日 星期' + cld_day.week;
 var key = 'd' + global.currYear + '-' + (global.currMonth + 1) + '-' + dateNum;
 if (cellImage[key]) {
  op.desc = cellImage[key].imageDesc;
 } else {
  var s;
  s = cld_day.lunarFestival;
  if (s.length > 0) {
   op.desc = s;
  } else {
   s = cld_day.solarTerms;
   if (s.length > 0) {
    op.desc = s;
   } else {
    s = cld_day.solarFestival;
    if (s.length > 0) {
     op.desc = s;
    }
   }
  }
 }
 var detailInfo = {
  year: cld_day.sYear,
  month: cld_day.sMonth,
  dayOfMonth: dateNum
 };
 var evt = utils.getMousePosition(event);
 var x = evt.x;
 var y = evt.y;
 detailInfo.lunar = '农历' + (cld_day.isLeap ? '闰 ' : '') + cld_day.lMonth + '月' + cDay(cld_day.lDay)
 detailInfo.dateNum = dateNum;
 detailInfo.dateDetail = op.title;
 try {
  var hl = eval('HuangLi.y' + global.currYear + '.d' + (cld_day.sMonth < 10 ? ('0' + cld_day.sMonth) : cld_day.sMonth) + (cld_day.sDay < 10 ? ('0' + cld_day.sDay) : cld_day.sDay));
  detailInfo.huangliY = hl.y;
  detailInfo.huangliJ = hl.j;
  if (indexDataSchedule[key])
   detailInfo.schedule = indexDataSchedule[key];
 } catch (e) {}
 var elDetail = $.dom('detail');
 elDetail.innerHTML = tplMgr.getInstance('detail_default_tpl').GetView(detailInfo);
 dialogMgrRili.show('detailDialog', op, x, y, event);
}

function showIframeRili(d) {
 return;
}

function showCalendars() {
 $("#iframeContainer").fadeOut("fast", function() {
  $("#calendar_container").fadeIn("slow");
 });
}

var dialogMgrRili = {
 dialog: null,
 option: null,
 moving: false,
 pos: null,
 show: function(el, options, x, y, event) {
  var op = {
   width: 328,
   title: '',
   draggable: true,
   desc: ''
  };
  var options = options || {};
  for (var p in options) {
   op[p] = options[p];
  }
  if (this.dialog) {
   this.hide();
  }
  this.option = op;
  this.dialog = $.dom(el);
  var width = this.option.width;
  var w = utils.getClientWidth();
  var h = utils.getClientHeight();
  var deatilHeight = 180;
  var left = 0;
  if (w > width) {
   left = (w - width) / 2;
  }
  left = (x - w / 2) > 0 ? (x - width - 8) : x;
  this.dialog.style.left = left + 'px';
  var top = (y - h / 2 > 0) ? (y - deatilHeight - 28) : (y + 8);
  this.dialog.style.top = top + 'px';
  var shadowHeight = $.dom('page').offsetHeight > utils.getClientHeight() ? $.dom('page').offsetHeight : utils.getClientHeight();
  var d = document;
  var pos = {
   x: x,
   y: y
  };
  d.onmousemove = function(ev) {
   try {
    var p = utils.getMousePosition(ev);
    var left1 = parseInt(dialogMgrRili.dialog.style.left);
    var top1 = parseInt(dialogMgrRili.dialog.style.top);
    left1 += p.x - pos.x;
    top1 += p.y - pos.y;
    top = top > p.y ? top : p.y + 1;
    dialogMgrRili.dialog.style.left = left1 + 'px';
    dialogMgrRili.dialog.style.top = top1 + 'px';
    pos = p;
   } catch (e) {}
  };
  $(this.dialog).find('.title').html(this.option.desc).end().show();
 },
 hide: function() {
  if (this.dialog) {
   $(this.dialog).hide();
   if (this.option.hideCallback) {
    try {
     this.option.hideCallback();
    } catch (ex) {}
   }
   this.option = null;
   this.dialog = null;
   this.moving = false;
   this.pos = null;
  }
 }
};

var pageMgrRili = {
 resizing: false,
 adjustGridContainer: function() {
  var elMainWrapper = $.dom('mainWrapper');
  var elMainNav = $.dom('mainNavRili');
  var elColheaders = $.dom('colheadersRili');
  var elGridContainer = $.dom('gridcontainerRili');
  elGridContainer.style.height = 300 + 'px';
  var pos = utils.getOffsetXY('dateSelectionRili', 'mainBody');
  var dateSelectionDiv = $.dom('dateSelectionDiv');
  dateSelectionDiv.style.left = pos.x + 'px';
  if (monthView && monthView.ready) {
   pageMgrRili.drawClickArea();
  }
 },
 drawWeekLine: function() {
  var width = Math.round(1 / 7 * 1000000) / 10000;
  var buffer = new StringBuffer();
  for (var i = 0; i < 7; i++) {
   var weeknum = (options.firstDayOfWeek + i) % 7;
   var left = Math.round(i / 7 * 1000000) / 10000;
   if (utils.numToWeek(weeknum) == '六' || utils.numToWeek(weeknum) == '日') {
    buffer.append('<div style="width: ').append(width).append('%; left: ').append(left).append('%;color:red;" class="chead cheadNotTodayRili"><span id="chead').append(i).append('">星期').append(utils.numToWeek(weeknum)).append('</span></div>');
   } else {
    buffer.append('<div style="width: ').append(width).append('%; left: ').append(left).append('%;" class="chead cheadNotTodayRili"><span id="chead').append(i).append('">星期').append(utils.numToWeek(weeknum)).append('</span></div>');
   }
  }
  $.dom('colheadersRili').innerHTML = buffer.toString();
 },

 drawRowSpliter: function() {
  var linecount = monthView.linecount;
  var buffer = new StringBuffer();
  for (var i = 0; i < linecount; i++) {
   var top = Math.round(i / linecount * 1000000) / 10000;
   if (i > 0) {
    buffer.append('<div id="r').append(i).append('" class="hrule hruleMonth" style="top: ').append(top).append('%;"></div>');
   }
  }
  $.dom('rowowner').innerHTML = buffer.toString();
 },
 drawColSpliter: function() {
  var buffer = new StringBuffer();
  for (var i = 1; i < 7; i++) {
   var left = Math.round(i / 7 * 1000000) / 10000;
   buffer.append('<div id="c').append(i).append('" class="vrule nogutterRili" style="width: 1px; left: ').append(left).append('%; height: 100%;"></div>');
  }
  $.dom('colowner').innerHTML = buffer.toString();
 },
 drawClickArea: function() {
  var dateMap = cacheMgr.getMonthCache(global.currYear, global.currMonth).dateMap;
  var buffer = new StringBuffer();
  for (var dateNum in dateMap) {
   var dateCell = dateMap[dateNum];
   buffer.append(dateCell.getClickAreaHTML());
  }
  $.dom('clickowner').innerHTML = buffer.toString();
 },
 drawDateGrid: function() {
  monthView.ready = false;
  var year = monthView.year;
  var month = monthView.month;
  var cld = monthView.cld;
  var firstline = monthView.firstline;
  var linecount = monthView.linecount;
  var width = Math.round(1 / 7 * 1000000) / 10000;
  var todayObj = new Date();
  var isThisMonth = todayObj.getFullYear() == year && todayObj.getMonth() == month;
  var today = todayObj.getDate();
  var buffer = new StringBuffer();
  var height = Math.round(1 / linecount * 1000000) / 10000;
  var in_instance = tplMgr.getInstance('calendar_cell_in_tpl');
  var out_instance = tplMgr.getInstance('calendar_cell_out_tpl');
  var today_instance = tplMgr.getInstance('calendar_cell_today_tpl');
  for (var i = 0; i < linecount; i++) {
   var top = Math.round(i / linecount * 1000000) / 10000;
   for (var j = 0; j < 7; j++) {
    var index = i * 7 + j;
    var currW = '14.2857';
    var dayInMonth = true;
    if ((index < (7 - firstline)) || (index >= (cld.length - firstline + 7))) {
     dayInMonth = false;
    }
    var dateNum = 0;
    var lunar = '';
    var lunarColor = '';
    if (dayInMonth) {
     dateNum = index - 7 + firstline + 1;
     var cld_day = cld[dateNum - 1];
     var s;
     if (cld_day.lDay == 1)
      lunar = (cld_day.isLeap ? '闰' : '') + cld_day.lMonth + '月' + (monthDays(cld_day.lYear, cld_day.lMonth) == 29 ? '小' : '大');
     else
      lunar = cDay(cld_day.lDay);
     s = cld_day.lunarFestival;
     if (s.length > 0) {
      if (s.length > 6) s = s.substr(0, 4) + '...';
      lunarColor = "#32CD32";
     } else {
      s = cld_day.solarTerms;
      if (s.length > 0) {
       lunarColor = "#32CD32";
       if ((s == '清明') || (s == '芒种') || (s == '夏至') || (s == '冬至')) {
        lunarColor = "#32CD32";
        if (s == '清明') s = '清明节';
       }
      } else {
       s = cld_day.solarFestival;
       if (s.length > 0) {
        if (s.length > 6) s = s.substr(0, 4) + '...';
        lunarColor = "#46BAEC";
       }
      }
     }
     if (s.length > 0) lunar = s;
    }
    var left = Math.round(j / 7 * 1000000) / 10000;
    var isToday = isThisMonth && (today == index - 7 + firstline + 1);
    var tpl_data = {
     index: index,
     dateNum: dateNum,
     isToday: isToday,
     lunar: lunar,
     lunarColor: lunarColor,
     left: left,
     top: top,
     width: currW,
     height: height
    }
    if (isToday) {
     buffer.append(today_instance.GetView(tpl_data));
    }
    if (dayInMonth) {
     buffer.append(in_instance.GetView(tpl_data));
    } else {
     buffer.append(out_instance.GetView(tpl_data));
    }
   }
  }
  $.dom('decowner').innerHTML = buffer.toString();
  monthView.ready = true;
 },
 addHoverBtn: function() {
  var config = {
   sensitivity: 3,
   interval: 10,
   over: this.overBtn,
   timeout: 10,
   out: this.outBtn
  };
  $('#mainNav .dateNavBtnWrapperRili').hoverIntent(config);
 },
 overBtn: function() {
  $(this).find('.t2').removeClass('themeBgColorRili1').css('background-color', '#6b92d7');
  $(this).find('.getBtn').removeClass('themeBgColorRili1').removeClass('dateNavBtnRili').addClass('dateNavBtnRili1');
  $(this).find('.getBtn').css('background-color', '#6b92d7');
 },
 outBtn: function() {
  $(this).find('.t2').removeClass('themeBgColor').css('background-color', '#ffffff');
  $(this).find('.getBtn').removeClass('themeBgColor').removeClass('dateNavBtnRili1').addClass('dateNavBtnRili');
  $(this).find('.getBtn').css('background-color', '#ffffff');
 },
 drawCalendar: function() {
  this.drawWeekLine();
  this.drawColSpliter();
  this.drawRowSpliter();
  this.drawDateGrid();
  this.addHoverBtn();
 }
};


function hoverDialog() {
 $(".title_class").hover(function() {
  $(this).css("color", "red");
 }, function() {
  $(this).css("color", "#000000");
 });
 $(".leftImg").hover(function() {
  $("#play_prev").attr("src", "../img/leftImg2.gif");
 }, function() {
  $("#play_prev").attr("src", "../img/leftImg1.gif");
 });
 $(".rightImg").hover(function() {
  $("#play_next").attr("src", "../img/rightImg1.gif");
 }, function() {
  $("#play_next").attr("src", "../img/rightImg2.gif");
 });
};

(function($) {
 var o = $.scrollTo = function(a, b, c) {
  o.window().scrollTo(a, b, c)
 };
 o.defaults = {
  axis: 'y',
  duration: 1
 };
 o.window = function() {
  return $($.browser.safari ? 'body' : 'html')
 };
 $.fn.scrollTo = function(l, m, n) {
  if (typeof m == 'object') {
   n = m;
   m = 0
  }
  n = $.extend({}, o.defaults, n);
  m = m || n.speed || n.duration;
  n.queue = n.queue && n.axis.length > 1;
  if (n.queue) m /= 2;
  n.offset = j(n.offset);
  n.over = j(n.over);
  return this.each(function() {
   var a = this,
    b = $(a),
    t = l,
    c, d = {},
    w = b.is('html,body');
   switch (typeof t) {
    case 'number':
    case 'string':
     if (/^([+-]=)?\d+(px)?$/.test(t)) {
      t = j(t);
      break
     }
     t = $(t, this);
    case 'object':
     if (t.is || t.style) c = (t = $(t)).offset()
   }
   $.each(n.axis.split(''), function(i, f) {
    var P = f == 'x' ? 'Left' : 'Top',
     p = P.toLowerCase(),
     k = 'scroll' + P,
     e = a[k],
     D = f == 'x' ? 'Width' : 'Height';
    if (c) {
     d[k] = c[p] + (w ? 0 : e - b.offset()[p]);
     if (n.margin) {
      d[k] -= parseInt(t.css('margin' + P)) || 0;
      d[k] -= parseInt(t.css('border' + P + 'Width')) || 0
     }
     d[k] += n.offset[p] || 0;
     if (n.over[p]) d[k] += t[D.toLowerCase()]() * n.over[p]
    } else d[k] = t[p];
    if (/^\d+$/.test(d[k])) d[k] = d[k] <= 0 ? 0 : Math.min(d[k], h(D));
    if (!i && n.queue) {
     if (e != d[k]) g(n.onAfterFirst);
     delete d[k]
    }
   });
   g(n.onAfter);

   function g(a) {
    b.animate(d, m, n.easing, a && function() {
     a.call(this, l)
    })
   };

   function h(D) {
    var b = w ? $.browser.opera ? document.body : document.documentElement : a;
    return b['scroll' + D] - b['client' + D]
   }
  })
 };

 function j(a) {
  return typeof a == 'object' ? a : {
   top: a,
   left: a
  }
 }
})(jQuery);;

(function($) {
 var a = 'serialScroll',
  b = '.' + a,
  c = 'bind',
  C = $[a] = function(b) {
   $.scrollTo.window()[a](b)
  };
 C.defaults = {
  duration: 1e3,
  axis: 'x',
  event: 'click',
  start: 0,
  step: 1,
  lock: 1,
  cycle: 1,
  constant: 1
 };
 $.fn[a] = function(y) {
  y = $.extend({}, C.defaults, y);
  var z = y.event,
   A = y.step,
   B = y.lazy;
  return this.each(function() {
   var j = y.target ? this : document,
    k = $(y.target || this, j),
    l = k[0],
    m = y.items,
    o = y.start,
    p = y.interval,
    q = y.navigation,
    r;
   if (!B) m = w();
   if (y.force) t({}, o);
   $(y.prev || [], j)[c](z, -A, s);
   $(y.next || [], j)[c](z, A, s);
   if (!l.ssbound) k[c]('prev' + b, -A, s)[c]('next' + b, A, s)[c]('goto' + b, t);
   if (p) k[c]('start' + b, function(e) {
    if (!p) {
     v();
     p = 1;
     u()
    }
   })[c]('stop' + b, function() {
    v();
    p = 0
   });
   k[c]('notify' + b, function(e, a) {
    var i = x(a);
    if (i > -1) o = i
   });
   l.ssbound = 1;
   if (y.jump)(B ? k : w())[c](z, function(e) {
    t(e, x(e.target))
   });
   if (q) q = $(q, j)[c](z, function(e) {
    e.data = Math.round(w().length / q.length) * q.index(this);
    t(e, this)
   });

   function s(e) {
    e.data += o;
    t(e, this)
   };

   function t(e, a) {
    if (!isNaN(a)) {
     e.data = a;
     a = l
    }
    var c = e.data,
     n, d = e.type,
     f = y.exclude ? w().slice(0, -y.exclude) : w(),
     g = f.length,
     h = f[c],
     i = y.duration;
    if (d) e.preventDefault();
    if (p) {
     v();
     r = setTimeout(u, y.interval)
    }
    if (!h) {
     n = c < 0 ? 0 : n = g - 1;
     if (o != n) c = n;
     else if (!y.cycle) return;
     else c = g - n - 1;
     h = f[c]
    }
    if (!h || d && o == c || y.lock && k.is(':animated') || d && y.onBefore && y.onBefore.call(a, e, h, k, w(), c) === !1) return;
    if (y.stop) k.queue('fx', []).stop();
    if (y.constant) i = Math.abs(i / A * (o - c));
    k.scrollTo(h, i, y).trigger('notify' + b, [c])
   };

   function u() {
    k.trigger('next' + b)
   };

   function v() {
    clearTimeout(r)
   };

   function w() {
    return $(m, l)
   };

   function x(a) {
    if (!isNaN(a)) return a;
    var b = w(),
     i;
    while ((i = b.index(a)) == -1 && a != l) a = a.parentNode;
    return i
   }
  })
 }
})(jQuery);

jQuery(function($) {
 $('#downLoad').serialScroll({
  target: '#imgDiv',
  items: 'li',
  prev: '#play_prev',
  next: '#play_next',
  axis: 'xy',
  duration: 700,
  force: true,
  onBefore: function(e, elem, $pane, $items, pos) {
   e.preventDefault();
   if (this.blur)
    this.blur();
  },
  onAfter: function(elem) {}
 })
});

function createXmlhttp() {
 var xmlhttp = null;
 if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest();
  if (xmlhttp.overrideMimeType) {
   xmlhttp.overrideMimeType("text/xml");
  }
 } else if (window.ActiveXObject) {
  try {
   xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
 if (!xmlhttp) {
  window.alert("Your broswer not support XMLHttpRequest!");
 }
 return xmlhttp;
}

function getUrlContent(surl) {
 var xmlhttp = createXmlhttp();
 var rsContent = null;
 xmlhttp.open("GET", surl, false);
 xmlhttp.setRequestHeader("If-Modified-Since", "Last-Modified");
 xmlhttp.send(null);
 if (xmlhttp.readyState == 4) {
  if (xmlhttp.status == 200 || xmlhttp.status == 304) {
   rsContent = xmlhttp.responseText;
   return rsContent;
  } else {
   return null;
  }
 }
}

function loadjscssfile(filename, filetype) {
 if (filetype == "js") {
  var fileref = document.createElement('script');
  fileref.setAttribute("language", "javascript");
  fileref.setAttribute("type", "text/javascript");
  fileref.text = getUrlContent(filename);
 } else
 if (filetype == "css") {
  var fileref = document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", filename);
 }
 if (typeof fileref != "undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref);
}