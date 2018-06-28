import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    // dereference here to avoid repeating 'this.props...'
    const { post, idx, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, idx)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
});

/* key={post.likes} ... This, along with the CSSTransitionGroup allows us
to add some animation. When we have a new number of likes, it's going to
animate itself from that initial state. */

export default Photo;