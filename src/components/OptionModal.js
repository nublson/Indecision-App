import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const OptionModal = props => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.closeModal}
		closeTimeoutMS={200}
		contentLabel="Selected Option"
		className="modal">
		<h3 className="model__title">Selected Option</h3>
		{props.selectedOption && (
			<p className="model__body">{props.selectedOption}</p>
		)}
		<button className="button" onClick={props.closeModal}>
			Okay
		</button>
	</Modal>
);

export default OptionModal;
