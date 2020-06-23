import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { updateJobRating } from "../../services/rating";
import { toast } from "react-toastify";
class Rating extends Component {
  state = {
    job: this.props.job,
  };
  onStarClick = async (nextValue, preValue, name) => {
    const rating = nextValue;
    console.log(rating);

    try {
      const { data: job } = await updateJobRating(this.state.job._id, rating);
      toast("rating added successfully..!!");
      this.setState({ job });
    } catch (ex) {
      toast.error(ex.response.data);
    }
  };

  render() {
    return (
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={this.state.job.jobRating}
        onStarClick={this.onStarClick}
      />
    );
  }
}

export default Rating;
