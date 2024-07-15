'use client';
import React, {
	type FC,
	type ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';
import { modalTypes } from './modalTypes';

type ModalStateType = typeof modalTypes;
type ModalType = keyof ModalStateType;

interface ModalContextType {
	isOpen?: boolean;
	openModal: (type: ModalType) => void;
	closeModal: (type: ModalType) => void;
	modalTypes: ModalStateType;
}

const ModalContext = createContext<ModalContextType>({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
	modalTypes,
});

interface ModalProviderProps {
	children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
	const [modalStates, setModalStates] = useState<ModalStateType>(modalTypes);

	const openModal = (type: ModalType) => {
		setModalStates((prevState) => ({ ...prevState, [type]: true }));
	};

	const closeModal = (type: ModalType) => {
		setModalStates((prevState) => ({ ...prevState, [type]: false }));
	};

	return (
		<ModalContext.Provider
			value={{ openModal, closeModal, modalTypes: modalStates }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
