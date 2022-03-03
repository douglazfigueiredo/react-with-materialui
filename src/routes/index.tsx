import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router"
import { Dashboard } from "../pages"
import { useDrawerContext } from "../shared/contexts"

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext()

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
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}