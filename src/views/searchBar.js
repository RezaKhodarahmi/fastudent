import React, { useState } from 'react'
import Input from '@mui/material/Input'
import CircularProgress from '@mui/material/CircularProgress'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const SearchSection = props => {
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()
  const router = useRouter()

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = e => {
    e.preventDefault()
    if (searchInput.trim() !== '') {
      setLoading(true)
      router.push(`/search/?s=${searchInput}`).then(() => setLoading(false))
    } else {
      toast.error(t('empty-search-input'))
    }
  }

  return (
    <div>
      <section className='FNV-Header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 FNV-HCard'>
              <h1>{props.title}</h1>
              <form onSubmit={handleSearchSubmit} className='FNV-HSearch input-group mb-3'>
                <Input
                  type='text'
                  placeholder={t('search-placeholder')}
                  className='form-control FNV-HSearchInput'
                  aria-describedby='button-addon1'
                  fullWidth
                  autoFocus
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button className='FNV-Btn BtnMedium PrimaryColor' type='submit' id='button-addon1' disabled={loading}>
                  {loading ? (
                    <CircularProgress size={22} />
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='22'
                      height='22'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='feather feather-search'
                    >
                      <circle cx='11' cy='11' r='8'></circle>
                      <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchSection
