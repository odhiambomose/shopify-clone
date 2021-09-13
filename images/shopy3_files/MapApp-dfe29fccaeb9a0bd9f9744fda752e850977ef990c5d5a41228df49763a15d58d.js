(self.webpackJsonp=self.webpackJsonp||[]).push([["map-app/MapApp"],{"./app/javascript/map-app/MapApp.js":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return st}));var i=a("../caches/app/node_modules/three/src/scenes/Scene.js"),n=a("../caches/app/node_modules/three/src/renderers/shaders/ShaderChunk.js"),s=a("../caches/app/node_modules/three/src/renderers/WebGL1Renderer.js"),o=(a("../caches/app/node_modules/core-js/modules/es.typed-array.sort.js"),a("../caches/app/node_modules/three/src/materials/ShaderMaterial.js")),r=a("../caches/app/node_modules/three/src/extras/curves/CubicBezierCurve3.js"),c=a("../caches/app/node_modules/three/src/core/BufferGeometry.js"),h=a("../caches/app/node_modules/three/src/objects/Mesh.js"),l=a("../caches/app/node_modules/three/src/objects/Points.js"),p=a("../caches/app/node_modules/three/src/core/BufferAttribute.js"),d=a("../caches/app/node_modules/three/src/math/Color.js"),u=a("../caches/app/node_modules/three/src/constants.js"),m=a("../caches/app/node_modules/three/src/core/Clock.js"),v=a("../caches/app/node_modules/d3-geo/src/interpolate.js"),f=a("../caches/app/node_modules/three/src/loaders/TextureLoader.js"),g=a("../caches/app/node_modules/three/src/math/Vector3.js");function y(t){return new Promise(((e,a)=>{(new f.a).load(t,e,a)}))}const b=Math.PI/180;function w(t,e){return{lat:-1*(t/b-90),lng:e/b-180}}function x(t,e){return{phi:(90-t)*b,theta:(e+180)*b}}function S(t,e,a){const{phi:i,theta:n}=x(t,e);return D(i,n,a)}function D(t,e,a){return new g.a(-a*Math.sin(t)*Math.cos(e),a*Math.cos(t),a*Math.sin(t)*Math.sin(e))}function C(t,e,a){return t<=e?e:t>=a?a:t}function M(t,e,a,i,n){const s=1-a;i[n]=255*(t.r*a+e.r*s),i[n+1]=255*(t.g*a+e.g*s),i[n+2]=255*(t.b*a+e.b*s)}function P(t,e){let a;const i=()=>{t()};return()=>{a&&clearTimeout(a),a=setTimeout(i,e)}}var A=a("./app/javascript/map-app/globe-app/arcs/points.vert"),j=a.n(A),k=a("./app/javascript/map-app/globe-app/arcs/points.frag"),z=a.n(k),T=a("./app/javascript/map-app/globe-app/arcs/line.vert"),I=a.n(T),R=a("./app/javascript/map-app/globe-app/arcs/line.frag"),O=a.n(R),L=a.p+"7ae6da3f2ba76a69229a4e07e388d53d.png";const _=80,U=100,E=new Array(474);for(let ot=0,rt=0;ot<E.length;rt+=2)E[ot++]=rt+0,E[ot++]=rt+1,E[ot++]=rt+2,E[ot++]=rt+2,E[ot++]=rt+1,E[ot++]=rt+3;var F=class{constructor(t){this.active=!0,this.state=t,this.handleData=this.handleData.bind(this),this.nextOrder=this.nextOrder.bind(this),this.screenResolutionScaler=1,window.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("Map").children[1];t&&(t.width<t.height?this.screenResolutionScaler=t.width*window.devicePixelRatio/3840:this.screenResolutionScaler=t.height*window.devicePixelRatio/2400,this.screenResolutionScaler=C(this.screenResolutionScaler,.1,1))}))}async init(t,e){let a;try{a=await y(L)}catch(b){return Promise.reject(b)}this.errorHandler=e,this.thicknessMultiplier=1;var n;this.scale=P(this.scale.bind(this),62.5),window.addEventListener("resize",this.scale),this.lineMaterial=new o.a({uniforms:{defaultThickness:{value:this.state.thickness}},vertexShader:I.a,fragmentShader:O.a,side:u.x,vertexColors:!0,transparent:!0,depthWrite:!1}),this.pointMaterial=new o.a({uniforms:{color:{value:(n=new d.a(this.state.pointColor),new g.a(n.r,n.g,n.b))},pointSize:{value:this.state.pointSize},texture:{type:"t",value:a}},vertexShader:j.a,fragmentShader:z.a,vertexColors:!0,transparent:!0,depthWrite:!1}),this.parentContainer=t,this.scene=new i.a,this.arcs=[],this.pointsGeometry=new c.a;const s=new Float32Array(300);this.pointsGeometry.setAttribute("position",new p.a(s,3));const r=new Uint8Array(300);this.pointsGeometry.setAttribute("color",new p.a(r,3,!0));const v=new Float32Array(U);this.pointsGeometry.setAttribute("alpha",new p.a(v,1));const f=new l.a(this.pointsGeometry,this.pointMaterial);this.scene.add(f);for(let i=0;i<U;i++){const t=new c.a;t.setIndex(E);const e=new Float32Array(480);t.setAttribute("position",new p.a(e,3));const a=new Uint8Array(480);t.setAttribute("color",new p.a(a,3,!0));const n=new Float32Array(480);t.setAttribute("direction",new p.a(n,3));const s=new Float32Array(160);t.setAttribute("thickness",new p.a(s,1));const o=new Float32Array(160);t.setAttribute("alpha",new p.a(o,1));const r=new h.a(t,this.lineMaterial);this.scene.add(r),this.arcs[i]={geometry:t,line:r,t:2,speed:0}}return t.add(this.scene),this.clock=new m.a,Promise.resolve()}scale(){window.innerWidth<750?this.thicknessMultiplier=3:this.thicknessMultiplier=1}generateSpline(t,e,a,i){const n=S(t,e,10),s=S(a,i,10),o=C(n.distanceTo(s)*this.state.arcHeightFactor,this.state.minArcHeight,this.state.maxArcHeight),c=Object(v.a)([e,t],[i,a]),h=c(.25),l=c(.75),p=S(h[1],h[0],10+o),d=S(l[1],l[0],10+o);return new r.a(n,p,d,s)}updateArc(t,e){const a=this.generateSpline(e.fromLatitude,e.fromLongitude,e.toLatitude,e.toLongitude).getPoints(_),i=t.geometry.attributes.position.array,n=t.geometry.attributes.direction.array,s=t.geometry.attributes.thickness.array;for(let o=0,r=0,c=0,h=0;o<a.length-1;o++){i[r++]=a[o].x,i[r++]=a[o].y,i[r++]=a[o].z,i[r++]=a[o].x,i[r++]=a[o].y,i[r++]=a[o].z,n[c++]=a[o].x-a[o+1].x,n[c++]=a[o].y-a[o+1].y,n[c++]=a[o].z-a[o+1].z,n[c++]=a[o+1].x-a[o].x,n[c++]=a[o+1].y-a[o].y,n[c++]=a[o+1].z-a[o].z;const t=this.thicknessMultiplier;s[h++]=this.state.thickness*t,s[h++]=this.state.thickness*t}t.geometry.attributes.position.needsUpdate=!0,t.geometry.attributes.direction.needsUpdate=!0,t.geometry.attributes.thickness.needsUpdate=!0,t.geometry.computeBoundingSphere(),t.t=0,t.speed=60*(.01+.01*Math.random())}updateOrders(t){const{arcs:e}=this;for(let a=0;a<99;a++)if(e[a].t>=2){this.updateArc(e[a],t.event);break}}async fetchData(){try{await fetch("/map-data.json").then((t=>t.json())).then((t=>this.handleData(t)))}catch{this.errorHandler()}}pause(){return this.active=!1,clearInterval(this.interval),Promise.resolve()}play(){return this.active=!0,this.fetchData(),Promise.resolve()}handleData({points:t=[],error:e=!1}){e||t.length<1?this.errorHandler("server error - unable to display map data"):(this.orders=t,this.orderIndex=0,this.interval=window.setInterval(this.nextOrder,80))}nextOrder(){this.updateOrders({event:{fromLongitude:this.orders[this.orderIndex][0],fromLatitude:this.orders[this.orderIndex][1],toLongitude:this.orders[this.orderIndex][2],toLatitude:this.orders[this.orderIndex][3]}}),this.orderIndex++,this.orderIndex>=this.orders.length&&(window.clearInterval(this.interval),this.fetchData())}update(){if(!this.active)return;const{arcs:t}=this,e=this.clock.getDelta();this.lineMaterial.uniforms.defaultThickness.value=this.state.thickness,this.pointMaterial.uniforms.pointSize.value=this.state.pointSize*this.screenResolutionScaler;const a=new d.a(this.state.startColor),i=new d.a(this.state.endColor),n=new d.a(this.state.pointColor),s=this.pointsGeometry.attributes.position.array,o=this.pointsGeometry.attributes.alpha.array,r=this.pointsGeometry.attributes.color.array,c=480;for(let p=0;p<U;p++){let d=0,u=0,m=0;const v=t[p];v.t<=1?(d=0,u=v.t,m=u-1):(d=v.t-1,u=1,m=1-d),v.geometry.setDrawRange((h=C(d*c,0,479),(l=3)*Math.round(h/l)),C(u*c,1,c));const f=3*Math.floor(79*u)*2,g=3*p;s[g]=v.geometry.attributes.position.array[f+0],s[g+1]=v.geometry.attributes.position.array[f+1],s[g+2]=v.geometry.attributes.position.array[f+2],o[p]=m,r[g]=255*n.r,r[g+1]=255*n.g,r[g+2]=255*n.g;const y=v.geometry.attributes.color.array,b=v.geometry.attributes.alpha.array;for(let t=0,e=0;t<y.length;){const n=(t/y.length-d)/u;M(a,i,1-n,y,t),t+=3,b[e++]=1-Math.abs(1-2*n)}v.geometry.attributes.color.needsUpdate=!0,v.geometry.attributes.alpha.needsUpdate=!0,v.t+=v.speed*e}var h,l;this.pointsGeometry.attributes.position.needsUpdate=!0,this.pointsGeometry.attributes.alpha.needsUpdate=!0,this.pointsGeometry.attributes.color.needsUpdate=!0}animateIn(){return this.fetchData(),this.scale(),Promise.resolve()}destroy(){return this.active=!1,clearInterval(this.interval),Promise.resolve()}},G=a("../caches/app/node_modules/three/src/math/Vector2.js"),H=a("../caches/app/node_modules/three/src/cameras/PerspectiveCamera.js"),N=a("../caches/app/node_modules/d3-geo/src/distance.js");const V=[[7.7749,180],[6.5909171875,179.765625],[4.2229515625,179.296875],[.6710031249999997,178.59375],[-4.064928125000001,177.65625],[-9.9848421875,176.484375],[-17.0887390625,175.078125],[-25.37661875,173.4375],[-34.84848125,171.5625],[-41.7239171875,169.1267109375],[-46.002926562499994,166.1301328125],[-47.685509374999995,162.572765625],[-46.771665625,158.45460937500002],[-43.2613953125,153.77566406250003],[-37.154698437499995,148.53592968750002],[-28.451575,142.73540625],[-17.152025,136.37409375],[-7.350649999999999,129.369359375],[.9525499999999996,121.72120312499999],[7.757574999999999,113.42962499999999],[13.064425,104.49462499999998],[16.8731,94.916203125],[19.183600000000002,84.69435937499998],[19.995925,73.82909374999998],[19.310074999999998,62.320406250000005],[19.219296874999998,51.9079265625],[19.723590625,42.5916546875],[20.82295625,34.371590624999996],[22.517393750000004,27.247734375],[24.806903125,21.2200859375],[27.691484375,16.2886453125],[31.1711375,12.453412500000002],[35.2458625,9.7143875],[38.28319375,6.159493749999999],[40.283131250000004,1.7887312499999999],[41.245675000000006,-3.3979],[41.170824999999994,-9.4004],[40.058581249999996,-16.21876875],[37.90894375,-23.85300625],[34.7219125,-32.3031125],[30.4974875,-41.569087499999995],[27.1458484375,-50.43336875],[24.666995312499996,-58.89595625],[23.060928124999997,-66.95685],[22.327646875,-74.61605],[22.4671515625,-81.87355625000001],[23.4794421875,-88.72936874999999],[25.36451875,-95.18348749999998],[28.122381249999997,-101.23591250000001],[30.0667609375,-107.43148125],[31.1976578125,-113.77019375],[31.515071875000004,-120.25205],[31.019003124999998,-126.87705],[29.7094515625,-133.64519375],[27.586417187500004,-140.55648125],[24.649900000000002,-147.6109125],[20.899900000000002,-154.80848749999998],[17.618650000000002,-161.106365625],[14.80615,-166.50454687500002],[12.4624,-171.00303125],[10.5874,-174.60181875],[9.18115,-177.300909375],[8.24365,-179.10030312499998],[7.7749,-180]],W={northAmerica:44,europe:34,asia:19,australia:11};var X=class{constructor(t,e,a,i,n){this.state=t,this.domContainer=i,this.camera=new H.a(75,e/a,.1,1e3),this.currentPoiIdx=W[n]||32,this.camT=0,this.interpolator=null,this.camDistance={current:28,target:28,scaleFactor:1},this.active=!1,this.animating=!0,this.isMouseDown=!1,this.rotationResumeDamper=1,this.pointsOfInterest=[];for(let s=0;s<V.length;s++)this.pointsOfInterest.push(new G.a(V[s][0],V[s][1]))}init(){this.scale=P(this.scale.bind(this),62.5),window.addEventListener("resize",this.scale),"ontouchstart"in window?(this.domContainer.addEventListener("touchstart",this.onTouchStart.bind(this)),this.domContainer.addEventListener("touchend",this.onTouchEnd.bind(this)),this.domContainer.addEventListener("touchcancel",this.onTouchCancel.bind(this)),this.domContainer.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!1})):(this.domContainer.addEventListener("mousedown",this.onMouseDown.bind(this)),this.domContainer.addEventListener("mouseup",this.onMouseUp.bind(this)),this.domContainer.addEventListener("mousemove",this.onMouseMove.bind(this))),this.clock=new m.a}onTouchMove(t){t.preventDefault(),t.stopPropagation(),this.onMouseMove({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY})}onMouseMove(t){if(!this.isMouseDown)return;const e=t.clientX,a=t.clientY;this.targetPhi+=.005*(this.lastMouseY-a),this.targetTheta+=.005*(this.lastMouseX-e),this.targetPhi=C(this.targetPhi,0,Math.PI),this.lastMouseX=t.clientX,this.lastMouseY=t.clientY}stopAnimating(){this.resumeAnimatingTimeoutID&&window.clearTimeout(this.resumeAnimatingTimeoutID),this.animating=!1}onTouchStart(t){this.onMouseDown({clientX:t.touches[0].clientX,clientY:t.touches[0].clientY})}onMouseDown(t){!this.active||this.isMouseDown||t.button>0||(this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.isMouseDown=!0,this.stopAnimating())}play(){return this.startAnimating(),Promise.resolve()}pause(){return this.stopAnimating(),Promise.resolve()}startAnimating(){const{lat:t,lng:e}=w(this.phi,this.theta),{lat:a,lng:i}=w(this.targetPhi,this.targetTheta);let n=1/0,s=this.currentPoiIdx;for(let c=0;c<this.pointsOfInterest.length;c++){const{x:t,y:e}=this.pointsOfInterest[c],o=Object(N.a)([i,a],[e,t]);o<n&&(n=o,s=c)}this.offset=s,this.currentPoiIdx=s-1;const{x:o,y:r}=this.pointsOfInterest[this.offset];this.camT=1e-4,this.interpolator=Object(v.a)([e,t],[r,o]),this.rotateSpeedScale=1/n,this.rotationResumeDamper=0,this.animating=!0}onTouchEnd(t){t.touches.length<=0&&this.onMouseUp()}onTouchCancel(t){t.touches.length<=0&&this.onMouseUp()}onMouseUp(){this.active&&this.isMouseDown&&(this.isMouseDown=!1,this.resumeAnimatingTimeoutID&&window.clearTimeout(this.resumeAnimatingTimeoutID),this.resumeAnimatingTimeoutID=window.setTimeout(this.startAnimating.bind(this),5e3))}update(){const t=this.clock.getDelta();if(this.animating)if(0===this.camT){this.offset=this.currentPoiIdx===this.pointsOfInterest.length-1?0:this.currentPoiIdx+1;const{x:e,y:a}=this.pointsOfInterest[this.currentPoiIdx],{x:i,y:n}=this.pointsOfInterest[this.offset];this.interpolator=Object(v.a)([a,e],[n,i]);const s=Object(N.a)([a,e],[n,i]);this.rotateSpeedScale=1/s,this.camT+=this.state.rotationSpeed*this.rotateSpeedScale*t}else if(this.camT>=1)this.camT=0,this.currentPoiIdx++,this.currentPoiIdx>=this.pointsOfInterest.length&&(this.currentPoiIdx=0);else{const[e,a]=this.interpolator(this.camT),i=S(a,e,this.camDistance.current);this.camera.position.x=i.x,this.camera.position.y=i.y,this.camera.position.z=i.z,this.camera.lookAt(S(a,e,10));const{phi:n,theta:s}=x(a,e);this.targetPhi=n,this.targetTheta=s,this.phi=this.targetPhi,this.theta=this.targetTheta,this.rotationResumeDamper=C(this.rotationResumeDamper+this.state.rotationDamperEaseAmount,0,1),this.camT+=this.state.rotationSpeed*this.rotateSpeedScale*this.rotationResumeDamper*t}else{const t=D(this.phi,this.theta,this.camDistance.current);this.camera.position.x=t.x,this.camera.position.y=t.y,this.camera.position.z=t.z,this.camera.lookAt(0,0,0)}const e=this.camDistance.target*this.camDistance.scaleFactor-this.camDistance.current;Math.abs(e)>.01&&(this.camDistance.current+=.05*e),this.phi+=6*(this.targetPhi-this.phi)*t,this.theta+=6*(this.targetTheta-this.theta)*t}animateIn(){return this.scale(),this.camDistance.target=22,this.active=!0,Promise.resolve()}destroy(){return Promise.resolve()}scale(){this.camera.aspect<=.5625?this.camDistance.scaleFactor=1.45:this.camDistance.scaleFactor=1}},Y=a("../caches/app/node_modules/three/src/geometries/SphereGeometry.js"),B=a("./app/javascript/map-app/globe-app/base-globe/shader.vert"),q=a.n(B),J=a("./app/javascript/map-app/globe-app/base-globe/shader.frag"),K=a.n(J),Q=a.p+"4ee6a6d728fbd53ee61c14e9af1f3eda.png",Z=a.p+"7538dbe764e081ba68ce2ee65cbab70c.png";var $=class{constructor(t){this.state=t}async init(t){let e,a;try{e=await y(Q),a=await y(Z)}catch(r){return Promise.reject(r)}this.parentContainer=t;let i={earthMask:{t:"t",value:e},lightingMap:{t:"t",value:a},time:{t:"f",value:0},resolution:{value:new G.a(1280,720)}};i=Object.keys(this.state).reduce(((t,e)=>"string"==typeof this.state[e]?{...t,[e]:{t:"c",value:new d.a(this.state[e])}}:{...t,[e]:{type:"f",value:this.state[e]}}),i);const n=new Y.a(10,100,100),s=new o.a({uniforms:i,vertexShader:q.a,fragmentShader:K.a});return this.sphere=new h.a(n,s),this.startTime=Date.now(),this.material=s,t.add(this.sphere),Promise.resolve()}update(){const t=(Date.now()-this.startTime)/1e3;t>7200&&(this.startTime=Date.now()),this.material.uniforms.time.value=t,Object.keys(this.state).forEach((t=>{-1===t.toLowerCase().indexOf("color")?this.material.uniforms[t].value=this.state[t]:this.material.uniforms[t].value.set(this.state[t])}))}animateIn(){return Promise.resolve()}pause(){return Promise.resolve()}play(){return Promise.resolve()}destroy(){return this.parentContainer.remove(this.sphere),Promise.resolve()}},tt=a("./app/javascript/map-app/globe-app/glsl/threed_perlin.glsl"),et=a.n(tt),at=a("./app/javascript/map-app/globe-app/settings.json");const it=[new F(at.arcs),new $(at.baseGlobe)];var nt=class{constructor(t,e){this.container=document.getElementById("Map"),this.pause=this.pause.bind(this),this.play=this.play.bind(this),this.startPoi=t,this.errorHandler=e}init({domContainer:t}){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.animationFrameId=null,this.loadCustomShaderChunks(),"true"===t.dataset.noRotate&&(at.poiCamera.rotationSpeed=1e-22),this.sceneRotation=0,this.scene=new i.a,this.poiCamera=new X(at.poiCamera,this.width,this.height,t,this.startPoi),it.push(this.poiCamera),this.camera=this.poiCamera.camera,this.renderer=new s.a({antialias:!1,alpha:!0}),this.renderer.setClearColor("#f4f6f8",0),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.state={active:!1,debug:!1},t.appendChild(this.renderer.domElement);return this.handleResize=P(this.handleResize.bind(this),62.5),window.addEventListener("resize",this.handleResize),Promise.all(it.map((t=>t.init(this.scene,this.errorHandler))))}update(){it.forEach((t=>{t.update&&t.update()})),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.update.bind(this))}animateIn(){return this.state.active=!0,Promise.all(it.map((t=>t.animateIn())))}pause(){return Promise.all(it.map((t=>t.pause())))}play(){return Promise.all(it.map((t=>t.play())))}destroy(){window.removeEventListener("resize",this.handleResize),it.map((t=>t.destroy()))}handleResize(){const t=this.container.offsetWidth,e=this.container.offsetHeight;this.width=t,this.height=e;const a=this.width/this.height;this.camera.aspect=a,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}loadCustomShaderChunks(){n.a.threed_perlin=et.a}};class st{constructor(t,e,a){this.container=t,this.revealMap=this.revealMap.bind(this),this.mountGlobe(e,a)}async mountGlobe(t,e){try{this.globeApp=new nt(t,e),await this.globeApp.init({domContainer:this.container}),this.revealMap(),this.globeApp.update()}catch(a){e(a)}}pause(){return this.globeApp.pause()}play(){return this.globeApp.play()}destroy(){return"object"==typeof this.globeApp?this.globeApp.destroy():null}revealMap(){this.globeApp.animateIn(),document.body.classList.add("active")}}},"./app/javascript/map-app/globe-app/arcs/line.frag":function(t,e){t.exports="uniform float defaultThickness;\nuniform float thicknessScale;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\nvarying vec3 originalPosition;\nvarying vec3 offsetPosition;\n\nvoid main() {\n  float a = 1.;\n\n  float d = distance(originalPosition, offsetPosition);\n\n  if (d > defaultThickness) {\n    a = 1. - pow(abs((d - defaultThickness) / (defaultThickness * thicknessScale)), 0.2);\n    a *= vAlpha;\n  }\n\n  gl_FragColor = vec4(vColor.rgb, a);\n}\n"},"./app/javascript/map-app/globe-app/arcs/line.vert":function(t,e){t.exports="attribute float thickness;\nattribute vec3 direction;\nattribute float alpha;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\nvarying vec3 originalPosition;\nvarying vec3 offsetPosition;\n\nvoid main() {\n  originalPosition = position.xyz;\n  vec3 look = originalPosition - cameraPosition;\n\n  vec3 offset = cross(\n    normalize(look),\n    normalize(direction)\n  );\n\n  offsetPosition = originalPosition + normalize(offset) * thickness;\n\n  vColor = color;\n  vAlpha = alpha;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(offsetPosition, 1.0);\n}\n"},"./app/javascript/map-app/globe-app/arcs/points.frag":function(t,e){t.exports="uniform sampler2D tex;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\nvoid main() {\n  vec4 texColor = texture2D(tex, gl_PointCoord);\n\n  gl_FragColor = vec4(vColor, texColor.r * vAlpha);\n}\n"},"./app/javascript/map-app/globe-app/arcs/points.vert":function(t,e){t.exports="uniform float pointSize;\n\nattribute float alpha;\n\nvarying vec3 vColor;\nvarying float vAlpha;\n\nvoid main() {\n  vColor = color;\n  vAlpha = alpha;\n\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n  gl_PointSize = pointSize;\n  gl_Position = projectionMatrix * mvPosition;\n}\n"},"./app/javascript/map-app/globe-app/base-globe/shader.frag":function(t,e){t.exports="precision highp float;\n\n#define PI 3.141592653589793\n\nuniform float time;\nuniform vec2 resolution;\nuniform vec3 oceanColor;\nuniform vec3 dotColor;\nuniform vec3 landColor;\nuniform float numDotRows;\nuniform float maxDotScale;\nuniform float minDotScale;\nuniform float maxDotOpacity;\nuniform float minDotOpacity;\nuniform float opacityTimeScale;\nuniform float opacityTravelSpeed;\nuniform float scaleTravelSpeed;\nuniform float scaleTimeScale;\nuniform float oceanDotOpacity;\nuniform float waterReflection;\nuniform float earthReflection;\nuniform float verticalReflectionStart;\nuniform float verticalReflectionEnd;\nuniform float lightmapMultiplier;\n\nuniform sampler2D earthMask;\nuniform sampler2D lightingMap;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\n#include <threed_perlin>\n\nfloat getDot(vec2 uv, float numDotRows, float dotScale) {\n  float baseDotSize = 0.5;\n  float aliasSize = 0.099999;\n\n  float dotSize = baseDotSize * dotScale;\n  float rowScale = 1.0 / numDotRows;\n\n  vec2 uvRepeat = mod(uv, vec2(rowScale)) / rowScale;\n\n  vec2 center = vec2(0.5, 0.5);\n  float dist = length(uvRepeat - center);\n  float bright = smoothstep(dotSize + aliasSize, dotSize, dist);\n\n  // just add to the outside a bit delete\n  bright += smoothstep(dotSize * 4.5, dotSize * 4.0, dist) * 0.12;\n\n  return bright;\n}\n\nfloat getRowCount(vec2 uv, float numDotRows) {\n  float rowScale = 1.0 / numDotRows;\n\n  return floor(uv.y / rowScale);\n}\n\nfloat getWindNoise(vec2 uv, float speed, float timeScale) {\n    float noiseValue = noise(vec3(uv.x * speed, uv.y * speed, time * timeScale));\n\n    if (noiseValue < 0.4) {\n        return 0.1;\n    } else {\n        return noiseValue;\n    }\n}\n\nfloat earthCurvatureScale(vec2 uv) {\n  return sin(uv.y * PI);\n}\n\nvec3 getRimLight() {\n  float earthAmount = texture2D(earthMask, vUv).x;\n\n  float verticalAmount = max(1.0 - max(dot(vec3(0.0, 1.0, 0.0), vNormal), 0.0), 0.0);\n  float lightingLookup = (1.0 - max(dot(vec3(0.0, 0.0, 1.0), vNormal), 0.0)) / 0.5;\n\n  verticalAmount = smoothstep(verticalReflectionStart, verticalReflectionEnd, verticalAmount);\n\n  vec4 regularLighting = texture2D(lightingMap, vec2(lightingLookup, 0.0));\n  float earthWaterAmount = mix(waterReflection, earthReflection, earthAmount);\n\n  return regularLighting.xyz * verticalAmount * earthWaterAmount * lightmapMultiplier;\n}\n\nvoid main() {\n  // need to scale uv because the input is rectangular\n  vec2 uvSquareScale = vec2(resolution.x / resolution.y, 1.0);\n  vec2 scaledUV = vUv * uvSquareScale;\n\n  float opacityNoise = getWindNoise(\n      scaledUV, // uv\n      opacityTravelSpeed, // speed\n      opacityTimeScale // time scale\n  );\n  float scaleNoise = getWindNoise(\n      scaledUV, // uv\n      scaleTravelSpeed, // speed\n      scaleTimeScale // time scale\n  );\n\n  float randScale = mix(minDotScale, maxDotScale, scaleNoise);\n  float bright = getDot(scaledUV, numDotRows, randScale * earthCurvatureScale(scaledUV));\n\n  float noiseOpacity = mix(minDotOpacity, maxDotOpacity, opacityNoise);\n\n  vec3 landDotColor = mix(landColor, dotColor, bright * noiseOpacity);\n  vec3 oceanDotColor = mix(oceanColor, dotColor, bright * noiseOpacity * oceanDotOpacity);\n\n  vec3 maskColor = texture2D(earthMask, vUv).xyz;\n  vec3 color = mix(oceanDotColor, landDotColor, maskColor.x);\n  vec3 colorWithLighting = color + getRimLight();\n\n  gl_FragColor = vec4(colorWithLighting, 1.0);\n}\n\n\n"},"./app/javascript/map-app/globe-app/base-globe/shader.vert":function(t,e){t.exports="precision mediump float;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\n\nvoid main() {\n  vUv = uv;\n  vNormal = normalize(normalMatrix * normal);\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"},"./app/javascript/map-app/globe-app/glsl/threed_perlin.glsl":function(t,e){t.exports="float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\nfloat noise(vec3 p){\n    vec3 a = floor(p);\n    vec3 d = p - a;\n    d = d * d * (3.0 - 2.0 * d);\n\n    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n    vec4 k1 = perm(b.xyxy);\n    vec4 k2 = perm(k1.xyxy + b.zzww);\n\n    vec4 c = k2 + a.zzzz;\n    vec4 k3 = perm(c);\n    vec4 k4 = perm(c + 1.0);\n\n    vec4 o1 = fract(k3 * (1.0 / 41.0));\n    vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n    return o4.y * d.y + o4.x * (1.0 - d.y);\n}\n"},"./app/javascript/map-app/globe-app/settings.json":function(t){t.exports=JSON.parse('{"baseGlobe":{"oceanColor":"#f3fcf4","dotColor":"#3fb484","landColor":"#69cf9c","numDotRows":250,"maxDotScale":0.8,"minDotScale":0.08,"maxDotOpacity":0,"minDotOpacity":0,"opacityTimeScale":2.5,"opacityTravelSpeed":300,"scaleTravelSpeed":200,"scaleTimeScale":3,"oceanDotOpacity":0.15,"waterReflection":0.27,"earthReflection":0.57,"verticalReflectionStart":0.57,"verticalReflectionEnd":1,"lightmapMultiplier":-1.2},"arcs":{"startColor":"#157a76","endColor":"#157a76","minArcHeight":1.5,"maxArcHeight":5,"arcHeightFactor":0.3,"thickness":0.015,"pointSize":10,"pointColor":"#157a76"},"poiCamera":{"rotationDamperEaseAmount":0.01,"rotationSpeed":0.06}}')}}]);
//# sourceMappingURL=MapApp-4b9529cb5d88e4ee09b8c03a04bba46e15e9e0fd3f128e3543dd569a29513cd3.js.map