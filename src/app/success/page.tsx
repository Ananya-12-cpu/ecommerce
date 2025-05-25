'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (sessionId) {
      // Here you would typically verify the payment status with your backend
      setStatus('success')
    } else {
      setStatus('error')
    }
  }, [sessionId])

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      {status === 'loading' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Processing your payment...</h1>
          <p className="text-gray-600">Please wait while we confirm your payment.</p>
        </div>
      )}

      {status === 'success' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}

      {status === 'error' && (
        <div>
          <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8">Please try again or contact support.</p>
          <Link
            href="/cart"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Return to Cart
          </Link>
        </div>
      )}
    </div>
  )
} 