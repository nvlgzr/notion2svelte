const charCode = 'a'.charCodeAt(0);

export default function (a) {
  var b = [a], sp, out, i, div;

  sp = 0;
  while (sp < b.length) {
    if (b[sp] > 25) {
      div = Math.floor(b[sp] / 26);
      b[sp + 1] = div - 1;
      b[sp] %= 26;
    }
    sp += 1;
  }

  out = "";
  for (i = 0; i < b.length; i += 1) {
    out = String.fromCharCode(charCode + b[i]) + out;
  }

  return out;
}