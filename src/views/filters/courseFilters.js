import React from 'react'

const CourseFilters = () => {
  return (
    <>
      <div className='col-md-9'>
        <div className='row'>
          {/* Type */}
          <div className='col-4 col-md-4'>
            <select class='form-select' aria-label='Default select example'>
              <option selected>Course Type</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>

          {/* Start Date */}
          <div className='col-4 col-md-4'>
            <select class='form-select' aria-label='Default select example'>
              <option selected>Course Start Date</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>

          {/* Sort */}
          <div className='col-4 col-md-4'>
            <select class='form-select' aria-label='Default select example'>
              <option selected>Display Sort</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseFilters
