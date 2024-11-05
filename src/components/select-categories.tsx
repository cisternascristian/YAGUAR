import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCategories(){
  return(
    <Select name="categories">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Categoría" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desarrollo-personal">Desarrollo Personal</SelectItem>
          <SelectItem value="espiritualidad">Espiritualidad</SelectItem>
          <SelectItem value="produccion">Producción</SelectItem>
          <SelectItem value="musica">Música</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
        </SelectContent>
    </Select>
    )
}