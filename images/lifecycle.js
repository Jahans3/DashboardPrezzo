/**
 * Created by jahansj on 07/10/2016.
 */
var MyComponent = React.createClass({
  getInitialState:function(){
    return{
      some: 'state'
    };

    /* ES6:
     constructor(){
     super();
     this.state = { some: 'state' };
     }
     */
  },
  componentWillMount:function(){
    // Prior to component mounting
  },
  componentDidMount:function(){
    // The component has just been mounted
  },
  componentWillReceiveProps:function(){
    // Component is about to receive new props
  },
  componentWillUpdate:function(){
    // Component will receive new props or state, not called on initial render
  },
  componentDidUpdate:function(){
    // Component has just received new props or state, not called on initial render
  },
  componentWillUnmount:function(){
    // Component will be removed from the DOM
  },
  render:function(){
    return (
        <div className="myClass">
          Hello world!
        </div>
    )
  }
});