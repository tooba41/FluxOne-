/**
 * Static mock API handlers for FluxOne Landing Page.
 * Handles client-side simulated submissions for Package Requests & Contact inquiries.
 */

const STORAGE_KEYS = {
  PACKAGE_REQUESTS: 'fluxone_package_requests',
  CONTACT_MESSAGES: 'fluxone_contact_messages',
}

export const landingApi = {
  // Submit subscription package request to Super Admin queue
  async submitPackageRequest(payload) {
    await new Promise((resolve) => setTimeout(resolve, 600)) // simulate network delay

    const requestItem = {
      id: `REQ-${Date.now()}`,
      ...payload,
      status: 'pending_super_admin_review',
      createdAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.PACKAGE_REQUESTS) || '[]')
      existing.unshift(requestItem)
      localStorage.setItem(STORAGE_KEYS.PACKAGE_REQUESTS, JSON.stringify(existing))
    } catch (e) {
      console.warn('LocalStorage unavailable for mock API persistence:', e)
    }

    return {
      success: true,
      message: `Your request for ${payload.packageName || 'the package'} has been submitted successfully to the FluxOne Admin team!`,
      data: requestItem,
    }
  },

  // Submit contact message
  async submitContactMessage(payload) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const messageItem = {
      id: `MSG-${Date.now()}`,
      ...payload,
      createdAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT_MESSAGES) || '[]')
      existing.unshift(messageItem)
      localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(existing))
    } catch (e) {
      console.warn('LocalStorage unavailable:', e)
    }

    return {
      success: true,
      message: 'Thank you for contacting FluxOne. Our enterprise advisor will reach out shortly.',
      data: messageItem,
    }
  },
}
