let SavingSystem = {
  save(k, v) {
    localStorage.setItem(k, v);
  },
  load(k) {
    return localStorage.getItem(k);
  },
  exp(k1, k2, op) {
    let r;
    switch (op) {
      case "+":
        r = k1 + k2;
        break;
      case "-":
        r = k1 - k2;
        break;
      case "*":
        r = k1 * k2;
        break;
      case "=":
        r = k1 = k2 ? true : false;
        break;
      case "<":
        r = k1 < k2 ? true : false;
        break;
      case ">":
        r = k1 > k2 ? true : false;
        break;
      default:
        r = undefined;
        break;
    }
    return r;
  },
  new_(k, v) {
    this.save(k, v);
  }
};
window.onbeforeunload = () => {
  SavingSystem.save();
};
let stats = {
  /* QUARKS */

  overall_quarks: 0,
  /* up quarks */
  h_quarks_u: 0,
  h_quarks_u_per_click: 1,
  h_quarks_u_per_sec: 0,
  /* down quarks */
  h_quarks_d: 0,
  h_quarks_d_per_click: 1,
  h_quarks_d_per_sec: 0,
  /* subatomic particles */

  /* protons */
  protons: 0,
  protons_per_click: 0,
  protons_per_sec: 0,
  /* neutrons */
  neutrons: 0,
  neutrons_per_sec: 0,
  neutrons_per_click: 0,
  /* electrons */
  electrons: 0,
  electrons_per_sec: 0,
  electrons_per_click: 0,
  /* Atoms ( 118 atoms, damn. )*/

  /* hydrogen */
  h_atoms: 0,
  h_atoms_per_click: 0,
  h_atoms_per_sec: 0,
  /* helium */
  he_atoms: 0,
  he_atoms_per_click: 0,
  he_atoms_per_sec: 0,
  /* lithium */
  li_atoms: 0,
  li_atoms_per_click: 0,
  li_atoms_per_sec: 0,
  /* beryllium */
  be_atoms: 0,
  be_atoms_per_click: 0,
  be_atoms_per_sec: 0,
  /* boron */
  b_atoms: 0,
  b_atoms_per_click: 0,
  b_atoms_per_sec: 0,
  /* carbon */
  c_atoms: 0,
  c_atoms_per_click: 0,
  c_atoms_per_sec: 0,
  /* nitrogen */
  n_atoms: 0,
  n_atoms_per_click: 0,
  n_atoms_per_sec: 0,
  /* oxygen */
  o_atoms: 0,
  o_atoms_per_click: 0,
  o_atoms_per_sec: 0,
  /* flourine */
  f_atoms: 0,
  f_atoms_per_click: 0,
  f_atoms_per_sec: 0,
  /* neon */
  ne_atoms: 0,
  ne_atoms_per_click: 0,
  ne_atoms_per_sec: 0,
  /* sodium */
  na_atoms: 0,
  na_atoms_per_click: 0,
  na_atoms_per_sec: 0,
  /* magnesium */
  mg_atoms: 0,
  mg_atoms_per_click: 0,
  mg_atoms_per_sec: 0,
  /* aluminum */
  al_atoms: 0,
  al_atoms_per_click: 0,
  al_atoms_per_sec: 0,
  /* silicon */
  si_atoms: 0,
  si_atoms_per_click: 0,
  si_atoms_per_sec: 0,
  /* phosphorus */
  p_atoms: 0,
  p_atoms_per_click: 0,
  p_atoms_per_sec: 0,
  /* sulfur */
  s_atoms: 0,
  s_atoms_per_click: 0,
  s_atoms_per_sec: 0,
  /* chlorine */
  cl_atoms: 0,
  cl_atoms_per_click: 0,
  cl_atoms_per_sec: 0,
  /* argon */
  ar_atoms: 0,
  ar_atoms_per_click: 0,
  ar_atoms_per_Sec: 0,
  /* potassium */
  k_atoms: 0,
  k_atoms_per_click: 0,
  k_atoms_per_sec: 0,
  /* calcium */
  ca_atoms: 0,
  ca_atoms_per_click: 0,
  ca_atoms_per_sec: 0,
  /* scandium */
  sc_atoms: 0,
  sc_atoms_per_click: 0,
  sc_atoms_per_sec: 0,
  /* titanium */
  ti_atoms: 0,
  ti_atoms_per_click: 0,
  ti_atoms_per_sec: 0,
  /* vanadium */
  v_atoms: 0,
  v_atoms_per_click: 0,
  v_atoms_per_sec: 0,
  /* manganese */
  mn_atoms: 0,
  mn_atoms_per_click: 0,
  mn_atoms_per_sec: 0,
  /* iron */
  fe_atoms: 0,
  fe_atoms_per_click: 0,
  fe_atoms_per_sec: 0
  /* ---- the end, to be continued ---- */
  /* note: the elements used in most lifeforms are nitrogen, carbon, oxygen, and phosphorus */
};

let h_quark = document.getElementById("h_quark");
let quark_more = document.getElementById("quark_more");
let quarks_overall = document.getElementById("quarks_ovr");
let up_quarks = document.getElementById("up_quarks");
let down_quarks = document.getElementById("down_quarks");
h_quark.addEventListener("click", () => {
  h_quark.getAttribute("quark") === "up" ? stats.h_quarks_u += stats.h_quarks_u_per_click : 
  h_quark.getAttribute("quark") === "down" ? stats.h_quarks_d += stats.h_quarks_d_per_click :
  console.error("Unrecognized quark type.")
})
quark_more.addEventListener("click", () => {
  let hidden_div = document.getElementById("quark_more_options")
  /* console.log("AA") debug */
  hidden_div.classList.contains("hidden") ? hidden_div.classList.remove("hidden") :
  hidden_div.setAttribute("class", "inline-div hidden")
  /* console.log("A") debug */
})
let quark_up_opt = document.getElementById("up_quark_op");
let quark_down_opt = document.getElementById("down_quark_op");
quark_up_opt.addEventListener("click", () => {
  h_quark.setAttribute("quark", "up")
  console.log("up")
})
quark_down_opt.addEventListener("click", () => {
  h_quark.setAttribute("quark", "down")
  console.log("down")
})
let UpdateInterval = setInterval(()=>{
  console.log("A")
  /* updating stats (overalls) */
  stats.overall_quarks = (stats.h_quarks_u + stats.h_quarks_d);
  /* updating display stats */
  quarks_overall.innerText = stats.overall_quarks;
  up_quarks.innerText = stats.h_quarks_u;
  down_quarks.innerText = stats.h_quarks_d;
}, 100)
SavingSystem._new("stats", "{}")
window.onunload = () => {
  SavingSystem.save("stats", stats)
}
window.onload = () => {
  let LoadedStats = SavingSystem.load("stats");
  JSON.parse(LoadedStats) == {} ?
  (stats.h_quarks_d_per_click = 1, stats.h_quarks_u_per_click = 1) :
  console.log(LoadedStats)
  
}