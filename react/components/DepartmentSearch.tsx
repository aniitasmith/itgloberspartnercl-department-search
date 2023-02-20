import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { useCssHandles } from 'vtex.css-handles'
import { SearchBar } from 'vtex.store-components'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql';
import DepartmentGroup from './DepartmentGroup';

const DepartmentSearch = () => {

  const CSS_HANDLES = [
    'container-loading',
    'container-department-search-custom',
    'department-search-bar-custom'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const { data, loading } = useQuery(QUERY_VALUE);
  const [slug, setSlug] = useState('');

  return loading
    ?
    <div className={handles['container-loading']}>Loading...</div>
    :
    <div className={handles['container-department-search-custom']}>
      <DepartmentGroup
        departments={data?.categories}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder='Que Departamento busca?'
        displayMode='search-and-clear-buttons'
        className={handles['department-search-bar-custom']}
      />
    </div>
}

export default DepartmentSearch
