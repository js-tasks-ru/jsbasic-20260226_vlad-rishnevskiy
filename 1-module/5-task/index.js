function truncate(str, maxlength) {
    let i = str.length;
    if (i > maxlength) {
      let a = str.substring(0,maxlength -1)
      let b = '…'
      let c = a + b;
    return c;
    } else {
    return str;
    };
  };
