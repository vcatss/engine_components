import"./web-ifc-api-BC8YMRiS.js";import{f as h,p as g,s as f,n as w,N as u,u as v}from"./index-C-JPXu_n.js";import{p as y}from"./index-DyM33b1I.js";import{Z as b,C}from"./index-B13Jg0iu.js";import{S as A}from"./stats.min-GTpOrGrX.js";import{C as B}from"./index-D2zeH9ie.js";import{R as N}from"./renderer-with-2d-Vj-QiZHm.js";import"./import-wrapper-prod-LhqN7JJy.js";import"./Line2-7GsqoD5b.js";import"./mark-Dwn_ERVH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B1Q8f4gg.js";y.init();b.init();const l=document.getElementById("container"),t=new h,S=t.get(g),e=S.create();e.scene=new f(t);e.renderer=new N(t,l);e.camera=new w(t);t.init();e.scene.setup();e.camera.controls.setLookAt(5,5,5,0,0,0);l.appendChild(e.renderer.three2D.domElement);const D=t.get(u);D.create(e);const E=t.get(v),P=await fetch("https://thatopen.github.io/engine_components/resources/road.frag"),x=await P.arrayBuffer(),U=new Uint8Array(x),i=E.load(U);e.scene.three.add(i);const r=new C(t);r.world=e;r.draw(i);r.highlighter.hoverCurve.material.color.set(1,1,1);const{material:a}=r.highlighter.hoverPoints;if(Array.isArray(a)){const o=a[0];"color"in o&&o.color.set(1,1,1)}else"color"in a&&a.color.set(1,1,1);const s=document.getElementById("scene-2d"),c=new B(t);s.components=t;if(!s.world)throw new Error("World not found!");c.world=s.world;await c.draw(i);c.onHighlight.add(({mesh:o})=>{r.highlighter.select(o);const p=o.curve.index,d=o.curve.alignment.absolute[p];d.mesh.geometry.computeBoundingSphere();const m=d.mesh.geometry.boundingSphere;m&&e.camera.controls.fitToSphere(m,!0)});const n=new A;n.showPanel(2);document.body.append(n.dom);n.dom.style.left="0px";e.renderer.onBeforeUpdate.add(()=>n.begin());e.renderer.onAfterUpdate.add(()=>n.end());
