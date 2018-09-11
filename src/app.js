import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenceDashboardPage = () => (
	<p>This is my dashboard.</p>
);

const AddExpencePage = () => (
	<p>Add my expence.</p>
);

const EditExpencePage = () => (
	<div>
		<p>Edit my expence.</p>
		<a href="/help">help</a>
	</div>
);

const HelpPage = () => (
	<p>Help me.</p>
);

const NotFoundPage = () => (
	<div>
		<p>404</p>
		<p>
			<Link to="/">Go home React</Link>
		</p>
	</div>
);

const Header = () => (
	<header>
		<h1>Expecsify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create Expence</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit Expence</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
	</header>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenceDashboardPage} exact={true} />
				<Route path="/create" component={AddExpencePage} />
				<Route path="/edit" component={EditExpencePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));