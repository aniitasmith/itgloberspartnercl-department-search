import React from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'

// import { SearchBar} from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  console.log("Datos del query", data, loading);
  return loading ? <div>Loading...</div> : <div>Busqueda de departamento</div>
}

export default DepartmentSearch
