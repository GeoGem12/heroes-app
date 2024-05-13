import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {

    return (
        <>

            <Navbar />

            <div className='container mt-2'>
                <Routes>
                    <Route exac path='/marvel' element={<MarvelScreen />} />
                    <Route exac path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route exac path='/dc' element={<DcScreen />} />
                    <Route exac path='/search' element={<SearchScreen />} />
                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}
