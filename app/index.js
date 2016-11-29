var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = { 
	name: "Jon Astemborski",
	username: "jastemborski",
	image: "https://avatars2.githubusercontent.com/u/4028320?v=3&u=e45dd03feba4e7ed9d0fdc83a2e9f46fcadcc527&s=400"
}
var ProfilePic = React.createClass({
	render: function () {
		return <img src= { this.props.imageUrl } style= {{ height: 100, width: 100} }></img>
	}
});

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href = { 'https://www.github.com/' + this.props.username }>
				{ this.props.username }
				</a>
			</div>
		);
	}  
});

var ProfileName = React.createClass({
	render: function () { 
		return <div> { this.props.name } </div>
	}
});

var Avatar = React.createClass ({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl = { this.props.user.image } />
				<ProfileName name = { this.props.user.name } />
				<ProfileLink username = { this.props.user.username } />  
			</div>
		);
	}
})

ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));

