import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export function BarbershopCard() {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-1">
        <div>
          <Image
            src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
            alt="Vintage Barber"
            width={160}
            height={160}
            className="rounded-xl"
          />
          <div className="px-2">
            <h3>Vintage Barber</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
