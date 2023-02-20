import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  const CSS_HANDLES = [
    'cont-select-option'
  ]
  const handles = useCssHandles(CSS_HANDLES)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
  };

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })
  return (
    <select
      onChange={onHandleSetSlug}
      defaultValue="value0"
      className={handles['cont-select-option']}
    >
      <option disabled value="value0">Departamentos</option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
