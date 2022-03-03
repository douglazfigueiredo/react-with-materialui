import { Button, Icon } from "@mui/material"
import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página inicial',
        path: '/pagina-inicial',
      },
    ])
  }, [])

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}><Icon>menu</Icon></Button>} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}