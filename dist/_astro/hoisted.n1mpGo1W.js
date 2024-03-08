import"./hoisted.mpKlTeMq.js";const s=globalThis.location.href;fetch(`${s}api/index.php?link-getall=1&BusinessPid=gesprender`,{method:"GET"}).then(t=>t.json()).then(t=>{if(!t?.status)return;const l=t?.data;let e="";l?.Links.map(n=>{let a=`
					<a href="${n?.link}" target="_blank" class="p-2 flex flex-content-center cardlink">
						<div class="cardlink-icon" >
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
								<path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
							</svg>
						</div>
						<div class="cardlink-title">${n?.title}</div>
					</a>
				`;e+=a});let i=document.getElementById("links-container");i.innerHTML=e}).catch(t=>{console.log(t)});
