import { NextRequest, NextResponse } from 'next/server'
import { createUser } from '@/services/users'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = await createUser(body)
    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message })
  }
}

