'use client';
import React, {
	createContext,
	useContext,
	useState,
	type FC,
	type ReactNode,
} from 'react';
import { ConfirmModal } from '@/components/features/modals';

interface ModalContextType {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	handleConfirm: (onConfirmCallback: () => void) => void;
}

const ConfirmModalContext = createContext<ModalContextType | undefined>(
	undefined,
);

interface ModalProviderProps {
	children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [onConfirmCallback, setOnConfirmCallback] = useState<
		(() => void) | null
	>(null);

	const openModal = () => setIsOpen(true);

	const closeModal = () => setIsOpen(false);

	const handleConfirm = () => {
		if (onConfirmCallback) {
			onConfirmCallback();
		}
		closeModal();
	};

	const handleConfirmSetup = (callback: () => void) => {
		setOnConfirmCallback(() => callback);
		openModal();
	};

	return (
		<ConfirmModalContext.Provider
			value={{
				isOpen,
				openModal,
				closeModal,
				handleConfirm: handleConfirmSetup,
			}}
		>
			{children}
			<ConfirmModal
				isOpen={isOpen}
				onClose={closeModal}
				onConfirm={handleConfirm}
			/>
		</ConfirmModalContext.Provider>
	);
};

export const useConfirmModal = (): ModalContextType => {
	const context = useContext(ConfirmModalContext);

	if (!context) {
		throw new Error('useConfirmModal must be used within a ModalProvider');
	}

	return context;
};
