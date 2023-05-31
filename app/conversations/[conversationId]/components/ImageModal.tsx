'use client'

import { FC } from 'react'
import Modal from '@/app/components/modals/Modal'
import Image from 'next/image'

interface Props {
  onClose: () => void
  src?: string | null
  isOpen?: boolean
}

const ImageModal: FC<Props> = ({ src, isOpen, onClose }) => {
  if (!src) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  )
}

export default ImageModal
