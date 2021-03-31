import React from 'react'
import Items from './Items'
import Top from './Top'

function index() {
	return (
		<div className="content">
			<div className="container">
				<Top />
				<Items />
			</div>
		</div>
	)
}

export default index
