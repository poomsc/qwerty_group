import React from "react";

// const StarRating = ({ data: { provinces }, setProvinces }) => {
//   return (
//     <div class="col-span-6 sm:col-span-3 pb-4">
//       <label
//         for="provinces"
//         class="block text-base font-semibold text-gray-900"
//       >
//         จังหวัด
//       </label>
//       <select
//         id="provinces"
//         class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         onChange={(e) => {
//           setProvinces(e.target.value);
//           console.log(e.target.value);
//         }}
//       >
//         <option value="ทั้งหมด">ทั้งหมด</option>
//         {provinces.map((value) => {
//           return <option value={value}>{value}</option>;
//         })}
//       </select>
//     </div>
//   );
// };

class StarRating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: [],
      rating: 0,
      hovered: 0,
      selectedIcon: "★",
      deselectedIcon: "☆",
    };

    let outOf = props.outOf ? props.outOf : 5;

    for (var i = 0; i < outOf; i++) {
      this.state.stars.push(i + 1);
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating,
    });

    if (this.props.onChange) this.props.onChange(newRating);
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }

  render() {
    const { stars, rating, hovered, deselectedIcon, selectedIcon } = this.state;

    return (
      <div>
        <div
          for="provinces"
          class="block text-base font-semibold text-gray-900"
        >
          จำนวน Rating
        </div>
        <div
          className="rating pl-3"
          style={{ fontSize: "1.5em", color: "#063662" }}
        >
          {stars.map((star) => {
            return (
              <span
                className="mr-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.changeRating(star);
                }}
                onMouseEnter={() => {
                  this.hoverRating(star);
                }}
                onMouseLeave={() => {
                  this.hoverRating(0);
                }}
              >
                {rating < star
                  ? hovered < star
                    ? deselectedIcon
                    : selectedIcon
                  : selectedIcon}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
export default StarRating;
