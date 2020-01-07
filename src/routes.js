import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { DetailPage } from "./pages/DetailPage"
import { ListPage } from "./pages/ListPage"

export const useRoutes = () => {
	return (
		<Switch>
			<Route path="/list">
				<ListPage />
			</Route>
			<Route path="/detail/:name">
				<DetailPage />
			</Route>
			<Redirect to="/list" />
		</Switch>
	)
}
