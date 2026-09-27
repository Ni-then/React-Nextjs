import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTodo } from './hooks/useTodo'

const App = () => {
  const todo = useTodo()
  return (
    <div>
      {todo.map((t)=><div>
          {t.title}
        </div>
        )}

    </div>
  )
}

export default App