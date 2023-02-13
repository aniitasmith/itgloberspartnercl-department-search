import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';

import DepartmentGroup from './DepartmentGroup';

import { SearchBar } from 'vtex.store-components'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState('');

  return loading
  ?
    <div>Loading...</div>
  :
    <div className='flex'>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder='Que Departamento busca?'
        displayMode='search-and-clear-buttons'
      />
    </div>
}

export default DepartmentSearch
