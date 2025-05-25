"use client"

import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store'

function ReduxProvider({children}:any) {
  return (
    <Provider store={Store}>{children}</Provider>
  )
}

export default ReduxProvider