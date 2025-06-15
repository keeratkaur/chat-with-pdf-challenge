"use client"

import React from 'react'
import { analyseYoutubeVideo } from '@/actions/analyseYoutubeVideo';
import AnalyseButton from './AnalyseButton';

function YoutubeVideoForm() {
  return (
    <div className='w-full max-w-md mx-auto'>
      <form
        action={analyseYoutubeVideo}
        className='flex flex-col gap-3 w-full'
      >
        <input
          type="text"
          name='url'
          placeholder='Enter YouTube URL'
          className='w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-200'
        />
        <div className="w-full">
          <AnalyseButton />
        </div>
      </form>
    </div>
  )
}

export default YoutubeVideoForm
