import React from 'react'

// Import Translation
import { useTranslation } from 'react-i18next'

const CategoryFilters = ({ categories, selectedCategories, handleClearFilters, handleCategoryChange }) => {
  const { t } = useTranslation()

  return (
    <>
      {/* Navbar Filters */}
      <div className='col-md-9'>
        <ul class='nav justify-content-between nav-pills mb-3 p-0' id='pills-tab' role='tablist'>
          <li class='nav-item' role='presentation'>
            <button
              onClick={() => handleClearFilters()}
              class='nav-link '
              id='All-Courses-tab'
              data-bs-toggle='pill'
              data-bs-target='#All-Courses'
              type='button'
              role='tab'
              aria-controls='All-Courses'
              aria-selected='true'
            >
              {t('all-courses')}
            </button>
          </li>
          {categories &&
            categories?.map(item => (
              <li key={item.id} class='nav-item' role='presentation'>
                <button
                  onClick={() => handleCategoryChange(item.id)}
                  className={`nav-link ${item.id == selectedCategories.id ? '' : null}`}
                  id='All-Courses-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#All-Courses'
                  type='button'
                  role='tab'
                  aria-controls='All-Courses'
                  aria-selected='true'
                >
                  {t(item.title)}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default CategoryFilters
