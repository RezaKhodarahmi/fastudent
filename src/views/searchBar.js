import React, { useState, useEffect } from 'react'
import { appConfig } from 'src/configs/appConfig'
import Link from 'next/link'

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
    <>
      <section className='FNV-SearchBar'>
        <div className='container'>
          <div className='row'>
            <form onSubmit={handleSearchSubmit} className='FNV-Search input-group'>
              <Input
                type='text'
                placeholder={t('search-placeholder')}
                className='form-control'
                aria-describedby='button-addon1'
                fullWidth
                autoFocus
                value={searchInput}
                onChange={handleSearchInputChange}
              />

              <button className='FNV-Btn BtnMedium' type='submit' id='button-addon1' disabled={loading}>
                {loading ? (
                  <CircularProgress size={22} />
                ) : (
                  <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 13.5L19.5 19" />
                    <circle cx="8.5" cy="8.5" r="7.5" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchSection
