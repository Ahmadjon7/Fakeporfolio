import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const cvPath = path.join(process.cwd(), 'public', 'cv', 'Ahmadjon_Karimov_CV.pdf')
    
    if (!fs.existsSync(cvPath)) {
      return new NextResponse('CV file not found', { status: 404 })
    }

    const cvFile = fs.readFileSync(cvPath)
    
    return new NextResponse(cvFile, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=Ahmadjon_Karimov_CV.pdf'
      }
    })
  } catch (error) {
    console.error('Error downloading CV:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 