export default function formatNumber(number) {
  let numberPart = number.toString().split('.');
  numberPart[0] = numberPart[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return numberPart.join('.');
}
