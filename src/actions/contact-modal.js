export const OPEN_CONTACT_MODAL = 'OPEN_CONTACT_MODAL'
export const CLOSE_CONTACT_MODAL = 'CLOSE_CONTACT_MODAL'

export const openContactModal = () => {
    return {
        type: OPEN_CONTACT_MODAL
    }
}

export const closeContactModal = () => {
    return {
        type: CLOSE_CONTACT_MODAL
    }
}