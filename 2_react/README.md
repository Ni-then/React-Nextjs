  // jb first time jb bhe component render hota hai woh bydefault value he show krwata hai , means aagr uske baad aaph koi value update kr rahe hai , for ex in this case woh re-render ko trigger nahi krega , means DOM update nahi hoga
  // so to tackle this problem we use useState hook
  // let result ;
  // Note : react only re-render the component when its state variable change