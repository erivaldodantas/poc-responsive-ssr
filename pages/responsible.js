import React from 'react';
import { Tablet, Mobile, Default } from '../lib/hooks';

const ResponsiblePage = () => {
	return (
		<div>
			<Tablet> Tablet |</Tablet>
			<Mobile> Mobile |</Mobile>
			<Default> Not mobile (desktop or laptop or tablet) |</Default>
		</div>
	);
};

export default ResponsiblePage;