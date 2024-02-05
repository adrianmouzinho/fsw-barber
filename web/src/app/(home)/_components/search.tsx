import { SearchIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <form className="grid grid-cols-[auto_min-content] gap-2">
      <div>
        <label htmlFor="search" className="sr-only">
          Buscar
        </label>
        <Input id="search" placeholder="Buscar" className="bg-card" />
      </div>

      <Button className="px-2.5 py-2 flex flex-row gap-2">
        <SearchIcon size={20} />
      </Button>
    </form>
  )
}
