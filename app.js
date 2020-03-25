const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 2.7,
  phillips: 4.1
};
const totalStar = 5;

const selectEl = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

let product;

selectEl.addEventListener('change', e => {
  product = e.target.value;
  ratingControl.disabled = false;

  ratingControl.value = ratings[product];
});
ratingControl.addEventListener('blur', e => {
  const rating = e.target.value;

  // Make sure 5 or under
  if (rating > 5) {
    alert('Please rate 1 - 5');
    return;
  }

  // Change rating
  ratings[product] = rating;

  getRatings();
});
const getRatings = () => {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / totalStar) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
};
window.onload = getRatings();
