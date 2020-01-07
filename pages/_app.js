import React from 'react';
import NextApp from 'next/app';
import { Context as ResponsiveContext } from 'react-responsive'

class App extends NextApp {

	render() {
		const { Component, pageProps, router } = this.props;
		const { route } = router;

		const setupReponsive = route === '/responsible' && {
			value: {
				width: 300
			}
		};

		return (
			<ResponsiveContext.Provider {...setupReponsive}>
				<Component
					{...pageProps}
				/>
			</ResponsiveContext.Provider>
		);
	}
}

export default App;