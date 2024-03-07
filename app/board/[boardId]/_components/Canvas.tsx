"use client"

import React from 'react'
import Participants from './Participants'
import Toolbar from './Toolbar'
import { useSelf } from '@/liveblocks.config'
import { Info } from './Info'

interface CanvasProps {
  boardId: string;
};

export const Canvas = ({
  boardId,
}: CanvasProps) => {
  const info = useSelf((me) => me.info);
  console.log(info)

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info boardId={boardId}/>
      <Participants/>
      <Toolbar/>
    </main>
  )
}

export default Canvas