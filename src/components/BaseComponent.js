/**
 * Created by Suiko on 5/11/2016.
 */
class BaseComponent extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this) );
  }
}

// newmediacampaigns.com/blog/refactoring react
