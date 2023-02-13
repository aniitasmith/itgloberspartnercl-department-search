import React from 'react'

type Props = {
  departments: [Category],
  handleSetSlug : any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {

  const onHandleSetSlug = (event : any) => {
    handleSetSlug(`${event.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
  };

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option
        value={department.slug}
        key={department.id}
      >
        {department.name}
      </option>
    )
  })
  return (
    <select
    onChange={onHandleSetSlug}
      defaultValue="value0"
    >
      <option disabled value="value0">Seleccione una opcion</option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
