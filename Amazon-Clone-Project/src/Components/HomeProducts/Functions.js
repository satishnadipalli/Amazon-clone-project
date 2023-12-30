export function percentageCalculator(newPrice,oldPrice){
  const result = oldPrice-newPrice;
  const res = oldPrice-result;
  const res2 = res/oldPrice;
  const results = res2*100
  return results.toFixed(0);
}
export function numbering(url) {
  const number = url.match(/\d+/)[0];
  const numericNumber = parseInt(number, 10);
  return numericNumber;
}
export function calculateEMI(emi){
  const result = emi/12;
  return result.toFixed(1);
}


export function ratingImage(avgRating){
  if(avgRating ===1){
    return "/images/1_star.png"
  }else if(avgRating === 2){
    return "/images/2_star.webp"
  }else if(avgRating === 3){
    return "/images/3_star.png"
  }else if(avgRating === 4){
    return "/images/4_star.png"
  }else if(avgRating === 5){
    return "/images/5_star.webp"
  }
  else{
    return "./public/images/product_10.jpg"
  }
  }
